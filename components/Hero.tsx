import styles from './Hero.module.css'
import HeroAccordion from './HeroAccordion'
import IdBio from './IdBio'

/* ── Miniatures éparsées ── */
const thumbnails = [
  { id: 2, src: '/images/atelier1.jpg', alt: 'Atelier — lumière du matin', cls: styles.img2 },
]

/* ── Cartes d'identité ── */
const identities = [
  {
    id: 1,
    photo:    '/images/phtos-menu-livre2.jpg',
    photoCredit: 'Crédit photo : Samuel Cammarano',
    photoAlt: 'Artiste Plasticien Visual artist',
    name:     'Artiste Plasticien / Visual artist',
    role:     'RGRANVILLE.COM',
    detail1:  '',
    detail2:  '',
    href:     'https://rgranville.com/',
    bio: (
      <>
        <strong>L'Empreinte du Vivant : Matières et Médiums</strong>
        {`
Et si la création s'apparentait à un tissage, à la croisée de la mémoire du geste et de l'intuition, guidée par un dialogue permanent avec la matière ? C'est le cœur d'une démarche qui se construit comme une conversation profonde entre l'opacité du monde et la lumière.

Ici, l'œuvre puise ses racines dans des faits réels et des histoires vécues, cherchant à donner une forme tangible à ce qui nous lie à notre environnement. Cette quête, à la fois ancrée dans le réel et imprégnée d'une dimension spirituelle, explore une vaste pluralité de médiums : de la peinture abstraite – conjuguant acrylique, huile, encre et matériaux mixtes – à la photographie, en passant par la transformation du verre en fusion (fusing).

Une exploration poétique où la matière, façonnée par l'instinct, devient le miroir de notre propre mémoire. Bertrand CARUGE
-----------------------------------------------------------------------------------------------------
`}
        <strong>The Mark of the Living: Materials and Mediums</strong>
        {`
What if creation were akin to weaving – where the memory of gesture meets intuition, guided by an ongoing dialogue with matter itself? This lies at the heart of an artistic approach conceived as a profound conversation between the opacity of the world and light.

Here, the work takes root in real events and lived stories, seeking to give tangible form to that which connects us to our environment. Anchored in reality yet imbued with a spiritual dimension, this quest explores a wide array of mediums: from abstract painting – combining acrylic, oil, ink, and mixed media – to photography, alongside the transformation of fused glass.

It is a poetic exploration in which matter, shaped by instinct, becomes the mirror of our collective memory. Bertrand CARUGE`}
      </>
    ),
  },
  {
    id: 3,
    photo:    '/images/side-photo.webp',
    photoCredit: 'Crédit photo : JCP2026',
    photoAlt: 'ZATRAP',
    name:     'ZATRAP',
    role:     `ZATRAP.FR`,
    detail1:  '',
    detail2:  '',
    href:     '#',
    bio: (
      <>
        <strong>Le Voyage est un Art - L'Art est un Voyage</strong>
        {`
À observer le déploiement d'un tel travail, on découvre petit à petit que l'apparence de sobriété et de discrétion n'est que la surface d'un cheminement créatif d'une grande richesse, fait de dédales et de sinuosités.

Sous ces méandres se dessine une profonde cohérence : le rôle central qu'occupe le voyage, pris dans son sens le plus large, au cœur de cette quête et de cette production. La notion d'itinérance – physique, mentale ou matérielle – constitue le fil conducteur idéal pour appréhender les origines, l'évolution et l'élaboration même de cette création.
Denise Zayan

-----------------------------------------------------------------------------------------------------
`}
        <strong>Travel is an Art - Art is a Journey</strong>
        {`
To observe the unfolding of such work is to gradually discover that its understated, discreet appearance is merely the surface of a deeply rich creative journey – one defined by mazes and meanders.

Beneath these twists and turns lies a profound coherence: the central role of travel, taken in its broadest sense, at the very heart of this quest and creation. The notion of wanderlust – whether physical, mental, or material – serves as the ideal common thread for understanding the origins, evolution, and ultimate crafting of this work.
Denise Zayan`}
      </>
    ),
  },
  {
    id: 2,
    photo:    '/images/desert1-dmum.art_.jpg',
    photoCredit: 'Crédit photo : Kira VYGRIVACH',
    photoAlt: 'Mise en scène artistique',
    name:     'Mise en scène artistique',
    role:     'DMUM.ART',
    detail1:  '',
    detail2:  '',
    href:     'https://dmum.art/',
    bio: (
      <>
        <strong>La voie…</strong>
        {`
Pour vivre une vie dans laquelle nous sommes inspirés et inspirons les autres, nos cœurs doivent êtres vivants. Ils doivent êtres emplis de passions et d'enthousiasmes.
Pour accomplir cela, nous avons besoins de courage de vivre en étant vrais avec nous-mêmes. rG


-----------------------------------------------------------------------------------------------------
`}
        <strong>The way…</strong>
        {`
To live a life in which we are both inspired others, our hearts must be alive. They must also be filled with passion and enthusiasm.
To accomplish this, we need the courage to be true to ourselves in our lives. rG`}
      </>
    ),
  },
]

export default function Hero() {
  return (
    <section className={styles.hero}>

      <span className={styles.ghost} aria-hidden="true"></span>

      <a href="mailto:rg.granville@gmail.com" className={styles.contactAbove}>
        Contact
      </a>

      {thumbnails.map((thumb) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={thumb.id}
          src={thumb.src}
          alt={thumb.alt}
          className={`${styles.thumb} ${thumb.cls}`}
          loading="lazy"
          decoding="async"
        />
      ))}

      {/* Texte identitaire */}
      <div className={styles.inner}>
        <div className={styles.content}>
          <HeroAccordion />
          <p className={styles.tagline}>
            Visual Artist &amp; Plasticien
          </p>
        </div>
      </div>

      {/* Cartes d'identité */}
      <div className={styles.idBlock}>
        <div className={styles.idGrid}>
          {identities.map((person) => (
            <div
              key={person.id}
              className={`${styles.idCard} ${person.id === 3 ? styles.idCardMobileFirst : ''}`}
            >

              <div className={styles.idPhotoSlot}>
                <div className={styles.idPhotoWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={person.photo || undefined}
                    alt={person.photoAlt}
                    className={styles.idPhoto}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {person.photoCredit && (
                  <span className={styles.idPhotoCredit}>{person.photoCredit}</span>
                )}
              </div>

              <div className={styles.idHeader}>
                <p className={styles.idName}>{person.name}</p>
                <p className={styles.idRole}>{person.role}</p>
              </div>

              <IdBio text={person.bio} />

              <div className={styles.idDetails}>
                <span className={styles.idDetail}>{person.detail1}</span>
                <span className={styles.idSep} aria-hidden="true">·</span>
                <span className={styles.idDetail}>{person.detail2}</span>
              </div>

              <a
                href={person.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.idLink}
                aria-label={`Découvrir ${person.name}`}
              >
                Découvrir
                <span className={styles.idLinkArrow} aria-hidden="true">→</span>
              </a>

            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
