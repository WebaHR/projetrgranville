import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.bottom}>
          <p className={styles.copy}>© {year} Régis Granville — Tous droits réservés</p>
          <p className={styles.credit}>Fait avec soin</p>
        </div>
      </div>
    </footer>
  )
}
