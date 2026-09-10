import styles from './Hero.module.css'
import HeroAccordion from './HeroAccordion'

/* ── Miniatures éparsées ── */
const thumbnails = [
  { id: 2, src: '/images/atelier1.jpg', alt: 'Atelier — lumière du matin', cls: styles.img2 },
]

/* ── Cartes d'identité ── */
const identities = [
  {
    id: 1,
    photo:    '/images/phtos-menu-livre2.jpg',
    photoAlt: 'Artiste Plasticien Visual artist',
    name:     'Artiste Plasticien / Visual artist',
    role:     'RGRANVILLE.COM',
    detail1:  '',
    detail2:  '',
    href:     'https://rgranville.com/',
    bio:      `Diplômée de l'École nationale supérieure des beaux-arts de Lyon, Claire Avis développe depuis 2008 une pratique transversale mêlant photographie, installation et peinture.`,
  },
  {
    id: 3,
    photo:    '/images/Esquisse-1_dessin_ProjetZatrap.jpg',
    photoAlt: 'ZATRAP',
    name:     'ZATRAP',
    role:     `ZATRAP.FR`,
    detail1:  'Revue Formes & Silences',
    detail2:  'Berlin — Paris',
    href:     '#',
    bio:      `Collaboratrice régulière de plusieurs revues d'art européennes, Elena Voss a signé les textes de plusieurs expositions de Claire Avis, dont la monographie parue en 2023.`,
  },
  {
    id: 2,
    photo:    '/images/desert1-dmum.art_.jpg',
    photoAlt: 'Mise en scène artistique',
    name:     'Mise en scène artistique',
    role:     'DMUM.ART',
    detail1:  '',
    detail2:  '',
    href:     'https://dmum.art/',
    bio:      `Martin Sorel accompagne depuis vingt ans des artistes émergents et confirmés. Sa galerie défend une ligne éditoriale centrée sur le rapport entre matière et lumière.`,
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
            Artiste plasticien et visuel (visual artist)
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

              <div className={styles.idHeader}>
                <p className={styles.idName}>{person.name}</p>
                <p className={styles.idRole}>{person.role}</p>
              </div>

              <p className={styles.idBio}>{person.bio}</p>

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
