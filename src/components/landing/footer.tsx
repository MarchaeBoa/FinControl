import Link from "next/link"
import { Logo } from "@/components/ui/logo"

const footerLinks = [
  { label: "Privacidade", href: "#" },
  { label: "Termos", href: "#" },
  { label: "Contato", href: "#" },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 md:px-15">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo size="sm" />

        <span className="text-[13px] text-muted">
          &copy; 2025 FinControl. Todos os direitos reservados.
        </span>

        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] text-muted hover:text-fc-text transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
