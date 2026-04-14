import Link from "next/link"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg px-6 py-12 text-center">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-accent2/5 blur-3xl" />
      </div>

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        <Link href="/" className="mb-10 inline-block">
          <Logo size="lg" />
        </Link>

        <span className="font-display text-[96px] font-extrabold leading-none text-accent">
          404
        </span>
        <h1 className="mt-4 font-display text-2xl font-bold text-fc-text sm:text-3xl">
          Página não encontrada
        </h1>
        <p className="mt-3 text-sm text-muted sm:text-base">
          O endereço que você tentou acessar não existe ou foi movido. Volte
          para o início e continue no controle das suas finanças.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" variant="primary">
            <Link href="/">Voltar para o início</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/dashboard">Ir para o dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
