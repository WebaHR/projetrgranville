import type { Metadata } from 'next'
import { EB_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Régis Granville — Artiste Plasticien (Visual Artist)',
  description:
    'Portfolio de Claire Avis, artiste contemporaine basée à Lyon. Photographie argentique, installation et peinture.',
  openGraph: {
    title: 'Régis Granville — Artiste Plasticien (Visual Artist)',
    description: 'Photographie argentique, installation et peinture.',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
