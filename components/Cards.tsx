import styles from './Cards.module.css'

const projects = [
  {
    id: 1,
    year: '2021 — 2023',
    medium: 'Photographie argentique',
    title: 'Série Blanche',
    description:
      `Une exploration de l'espace négatif à travers trente-six tirages baryté grand format. La lumière comme matière première, le vide comme seul sujet.`,
    href: 'https://example.com/serie-blanche',
  },
  {
    id: 2,
    year: '2022',
    medium: 'Installation mixte',
    title: 'Fragments',
    description:
      `Installation immersive composée d'éléments collectés sur dix ans de travail : fragments de pellicule, encres et papiers de soie superposés en couches successives.`,
    href: 'https://example.com/fragments',
  },
  {
    id: 3,
    year: '2024',
    medium: `Peinture à l'huile`,
    title: 'Territoire Intime',
    description:
      'Série de douze toiles grand format questionnant la frontière entre paysage intérieur et mémoire corporelle. Actuellement présentée au MUCEM, Marseille.',
    href: 'https://example.com/territoire-intime',
  },
]

export default function Cards() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.label}>Œuvres</span>
          <h2 className={styles.title}>Séries & Projets</h2>
        </header>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.cardMeta}>
                <span className={styles.cardYear}>{project.year}</span>
                <span className={styles.cardMedium}>{project.medium}</span>
              </div>

              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btn}
                aria-label={`Découvrir ${project.title}`}
              >
                Découvrir
                <span className={styles.arrow} aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
