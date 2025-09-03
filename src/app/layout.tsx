import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Space Tourism Website',
  description: 'Explore the wonders of space tourism with our cutting-edge spacecraft and destinations.',
  icons: {
    icon: '/assets/favicon-32x32.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white ff-sans-normal">
        <a className="skip-to-content" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  )
}