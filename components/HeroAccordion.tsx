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
            {`Artiste plasticien et visuel, Régis Granville ne façonne pas de simples objets, il crée des expériences.

Sa démarche explore le dialogue intime entre matière et lumière, tissant des ponts entre mémoire et spiritualité. Entre peinture abstraite, sculpture et verre en fusion, il donne une forme tangible à notre lien au monde. Au-delà de la toile, il libère l'art pour concevoir des installations immersives où le spectateur devient acteur.
C’est le cœur de son projet magistral, Zatrap’, inspiré par la tradition martiniquaise du piège à crabes de terre et le mythique crabe violoniste. Ce dispositif monumental transcende le folklore pour devenir une odyssée anthropologique universelle. L'homme moderne, prisonnier de ses certitudes, y est invité à se laisser piéger pour mieux se libérer.

Entre l'arche minérale et l'antre mémoriel, le visiteur traverse un rite sensoriel total, rythmé par Eugène Mona et Verdi. Véritable électrochoc humaniste, Zatrap’ réveille les cinq sens et brise l'indifférence de notre époque hyper-connectée. Plus qu'une œuvre, c'est une offrande organique et vivante qui nous murmure qu'il est encore temps de se reconnecter à l'essentiel.

À vous, désormais, de la faire naître
.`}
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
