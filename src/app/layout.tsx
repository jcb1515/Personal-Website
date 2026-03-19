import type { Metadata } from 'next'
import { Oswald, IBM_Plex_Mono, Cinzel } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { ScrollProgress } from '@/components/ScrollProgress'
import { PageTransition } from '@/components/PageTransition'

const headingFont = Oswald({ 
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '700']
})

const bodyFont = IBM_Plex_Mono({ 
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600']
})

const fancyFont = Cinzel({
  subsets: ['latin'],
  variable: '--font-fancy',
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'James Boutros | Portfolio',
  description: 'Personal portfolio website for James Boutros',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} ${fancyFont.variable}`}>
      <body className="bg-background text-foreground min-h-screen flex flex-col font-body antialiased">
        <ScrollProgress />
        <NavBar />
        <main className="flex-1 w-full max-w-7xl mx-auto pt-24 flex flex-col items-center">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  )
}
