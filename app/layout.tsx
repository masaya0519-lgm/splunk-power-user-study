import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Splunk Power User 試験対策',
  description: 'Splunk Core Certified Power User 試験の分野別問題演習サイト',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
