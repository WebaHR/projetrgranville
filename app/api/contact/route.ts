import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const CONTACT_EMAIL = 'rg.granville@gmail.com'

// Score minimal accepté (0.0 = bot probable, 1.0 = humain probable) —
// 0.5 est le seuil communément recommandé par Google pour reCAPTCHA v3.
const RECAPTCHA_MIN_SCORE = 0.5

async function verifyRecaptcha(token: string, ip: string | null): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY
  if (!secret) return false

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret,
        response: token,
        ...(ip ? { remoteip: ip } : {}),
      }),
    })
    const data = await res.json()
    return (
      data.success === true &&
      data.action === 'contact' &&
      typeof data.score === 'number' &&
      data.score >= RECAPTCHA_MIN_SCORE
    )
  } catch {
    return false
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    wantsVideo,
    wantsBrochure,
    message,
    honeypot,
    captchaToken,
  } = body as Record<string, string | boolean | undefined>

  // Honeypot : champ invisible que seuls les bots remplissent. On
  // répond succès sans rien envoyer, pour ne pas leur signaler le piège.
  if (honeypot) {
    return NextResponse.json({ ok: true })
  }

  if (typeof captchaToken !== 'string' || !captchaToken) {
    return NextResponse.json({ error: 'Merci de valider le captcha.' }, { status: 400 })
  }

  const captchaOk = await verifyRecaptcha(captchaToken, request.headers.get('x-forwarded-for'))
  if (!captchaOk) {
    return NextResponse.json({ error: 'Validation du captcha échouée, réessayez.' }, { status: 400 })
  }

  if (
    typeof firstName !== 'string' || !firstName.trim() ||
    typeof lastName !== 'string' || !lastName.trim() ||
    typeof email !== 'string' || !email.trim()
  ) {
    return NextResponse.json({ error: 'Champs obligatoires manquants.' }, { status: 400 })
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: "Service d'envoi non configuré." }, { status: 500 })
  }

  const lines = [
    `Prénom : ${firstName}`,
    `Nom : ${lastName}`,
    `Email : ${email}`,
    typeof phone === 'string' && phone.trim() ? `Téléphone : ${phone}` : null,
    `Voir la vidéo : ${wantsVideo ? 'Oui' : 'Non'}`,
    `Lire la brochure : ${wantsBrochure ? 'Oui' : 'Non'}`,
    typeof message === 'string' && message.trim() ? `\nMessage :\n${message}` : null,
  ].filter((line): line is string => line !== null)

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: 'Contact Régis Granville <onboarding@resend.dev>',
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Nouveau contact : ${firstName} ${lastName}`,
      text: lines.join('\n'),
    })

    if (error) {
      return NextResponse.json({ error: "Échec de l'envoi." }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Échec de l'envoi." }, { status: 500 })
  }
}
