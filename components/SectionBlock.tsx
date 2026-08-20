import styles from './SectionBlock.module.css'

interface SectionBlockProps {
  index: string
  title: string
  paragraph: string
  imageSrc: string
  imageAlt: string
  imagePosition?: 'left' | 'right'
}

export default function SectionBlock({
  index,
  title,
  paragraph,
  imageSrc,
  imageAlt,
  imagePosition = 'left',
}: SectionBlockProps) {
  return (
    <section className={styles.section}>
      <div
        className={`${styles.container} ${
          imagePosition === 'right' ? styles.imageRight : ''
        }`}
      >
        {/* Colonne image */}
        <div className={styles.imageWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className={styles.image}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Colonne texte */}
        <div className={styles.textBlock}>
          <span className={styles.index}>{index}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.paragraph}>{paragraph}</p>
        </div>
      </div>
    </section>
  )
}
