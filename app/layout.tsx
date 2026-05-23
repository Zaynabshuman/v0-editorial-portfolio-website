import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: 'Zaynab Shuman | Senior Programme Quality, MEAL & Adaptive Management Specialist',
  description: 'Senior Programme Quality and MEAL professional supporting humanitarian and development actors through accountability, evaluations, learning systems, and evidence-informed decision-making.',
  keywords: ['MEAL', 'Programme Quality', 'Humanitarian', 'Development', 'Monitoring', 'Evaluation', 'Accountability', 'Learning'],
  authors: [{ name: 'Zaynab Shuman' }],
  openGraph: {
    title: 'Zaynab Shuman | Senior Programme Quality, MEAL & Adaptive Management Specialist',
    description: 'Senior Programme Quality and MEAL professional supporting humanitarian and development actors.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
