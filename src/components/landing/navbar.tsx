"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Recursos", href: "#recursos" },
  { label: "Precos", href: "#precos" },
  { label: "Blog", href: "#" },
  { label: "Suporte", href: "#" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 15, 0.6)", "rgba(10, 10, 15, 0.95)"]
  )
  const borderBottomColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.07)"]
  )

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        style={{ backgroundColor, borderBottomColor }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-15 md:py-5 backdrop-blur-xl border-b border-transparent"
      >
        {/* Logo */}
        <Link href="/" aria-label="Pagina inicial">
          <Logo size="md" />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors duration-200 hover:text-fc-text"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Entrar</Link>
          </Button>
          <Button variant="primary" size="sm" asChild>
            <Link href="/cadastro">Comecar gratis</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-fc-text hover:bg-surface-2 transition-colors"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl pt-20 px-6 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-muted py-3 border-b border-border transition-colors hover:text-fc-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-8">
            <Button variant="secondary" size="lg" asChild className="w-full justify-center">
              <Link href="/login" onClick={() => setMobileOpen(false)}>
                Entrar
              </Link>
            </Button>
            <Button variant="primary" size="lg" asChild className="w-full justify-center">
              <Link href="/cadastro" onClick={() => setMobileOpen(false)}>
                Comecar gratis
              </Link>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
