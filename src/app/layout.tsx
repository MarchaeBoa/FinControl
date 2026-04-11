import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "FinControl — Controle Financeiro Inteligente",
  description:
    "Controle dívidas, gastos e metas financeiras em um único lugar. Entenda para onde vai cada centavo e conquiste sua liberdade financeira.",
  keywords: [
    "controle financeiro",
    "finanças pessoais",
    "orçamento",
    "dívidas",
    "metas financeiras",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
