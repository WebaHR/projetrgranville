'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import styles from './ContactModal.module.css'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactModal({ triggerClassName }: { triggerClassName: string }) {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) return
    firstInputRef.current?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (data.get('company')) return // honeypot

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.get('firstName'),
          lastName: data.get('lastName'),
          email: data.get('email'),
          phone: data.get('phone'),
          wantsVideo: data.get('wantsVideo') === 'on',
          wantsBrochure: data.get('wantsBrochure') === 'on',
          message: data.get('message'),
          honeypot: data.get('company'),
        }),
      })

      if (!res.ok) throw new Error('request failed')

      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  function close() {
    setOpen(false)
  }

  return (
    <>
      <button
        type="button"
        className={triggerClassName}
        onClick={() => {
          setOpen(true)
          setStatus('idle')
        }}
      >
        Contact
      </button>

      {open && (
        <div className={styles.overlay} onClick={close}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className={styles.closeBtn} onClick={close} aria-label="Fermer">
              ×
            </button>

            <h2 id="contact-modal-title" className={styles.title}>Contact</h2>

            {status === 'sent' ? (
              <p className={styles.success}>Merci, votre message a bien été envoyé.</p>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                {/* Honeypot anti-spam — invisible pour un humain */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className={styles.honeypot}
                  aria-hidden="true"
                />

                <div className={styles.row}>
                  <label className={styles.field}>
                    Prénom *
                    <input ref={firstInputRef} type="text" name="firstName" required />
                  </label>
                  <label className={styles.field}>
                    Nom *
                    <input type="text" name="lastName" required />
                  </label>
                </div>

                <label className={styles.field}>
                  Email *
                  <input type="email" name="email" required />
                </label>

                <label className={styles.field}>
                  Téléphone
                  <input type="tel" name="phone" />
                </label>

                <fieldset className={styles.checkboxes}>
                  <legend>Je souhaite :</legend>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" name="wantsVideo" /> Voir la vidéo
                  </label>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" name="wantsBrochure" /> Lire la brochure
                  </label>
                </fieldset>

                <label className={styles.field}>
                  Message
                  <textarea name="message" rows={4} />
                </label>

                {status === 'error' && (
                  <p className={styles.errorMsg}>
                    Une erreur est survenue. Réessayez ou écrivez à rg.granville@gmail.com.
                  </p>
                )}

                <button type="submit" className={styles.submit} disabled={status === 'sending'}>
                  {status === 'sending' ? 'Envoi…' : 'Envoyer'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
