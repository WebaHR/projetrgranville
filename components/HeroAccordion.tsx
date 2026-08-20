'use client'

import { useState } from 'react'
import styles from './Hero.module.css'

export default function HeroAccordion() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((o) => !o)

  return (
    <div className={styles.accordion}>
      {/* Titre cliquable */}
      <h1 className={styles.accordionH1}>
        <button
          className={styles.accordionBtn}
          onClick={toggle}
          aria-expanded={open}
          aria-controls="hero-text-panel"
        >
          Régis Granville
          <span
            className={`${styles.accordionMark} ${open ? styles.accordionMarkOpen : ''}`}
            aria-hidden="true"
          >
            +
          </span>
        </button>
      </h1>

      {/* Panneau animé */}
      <div
        id="hero-text-panel"
        role="region"
        aria-label="Présentation de Régis Granville"
        className={`${styles.accordionPanel} ${open ? styles.accordionPanelOpen : ''}`}
      >
        <div className={styles.accordionInner}>
          <p className={styles.accordionText}>
            {`Née à Lyon en 1984, Claire Avis développe depuis 2008 une pratique transversale mêlant photographie argentique, installation et peinture à l'huile. Formée à l'ENSBA de Lyon puis en résidence à la Villa Médicis en 2014, son travail interroge la notion de trace et de mémoire à travers des matières sensibles — papier baryté, toile encaustique, résine. Ses œuvres ont été présentées dans une quinzaine d'institutions européennes et font partie de plusieurs collections publiques et privées.`}
          </p>
        </div>
      </div>

      {/* Flèche animée — même toggle que le titre */}
      <button
        className={`${styles.scrollArrow} ${open ? styles.scrollArrowOpen : ''}`}
        onClick={toggle}
        aria-expanded={open}
        aria-controls="hero-text-panel"
        aria-label={open ? 'Fermer la présentation' : 'Lire la présentation'}
      >
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L10 10L19 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}
