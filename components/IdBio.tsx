'use client'

import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import styles from './Hero.module.css'

export default function IdBio({ text }: { text: ReactNode }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const [open, setOpen] = useState(false)
  const [truncated, setTruncated] = useState(false)

  useLayoutEffect(() => {
    const check = () => {
      const el = ref.current
      if (!el) return
      setTruncated(!open && el.scrollHeight > el.clientHeight + 1)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [open])

  return (
    <div className={styles.idBioWrap}>
      <p
        ref={ref}
        className={`${styles.idBio} ${open ? styles.idBioOpen : ''}`}
      >
        {text}
      </p>
      {(truncated || open) && (
        <button
          type="button"
          className={styles.idBioToggle}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          {open ? '− Réduire' : '+ Lire la suite'}
        </button>
      )}
    </div>
  )
}
