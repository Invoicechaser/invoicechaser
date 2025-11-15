import './globals.css'

export const metadata = {
  title: 'InvoiceChaser - Automatisches Mahnwesen',
  description: 'Wir holen dein Geld. Automatisiert. Garantiert.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
