"use client"

import Link from "next/link"
import { ShieldCheck, TrendingUp, Wallet } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-bg">
      {/* Left panel - decorative */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden flex-col items-center justify-center p-12 bg-gradient-to-br from-accent/20 via-accent2/20 to-accent2/10">
        {/* Background blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-accent/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent2/10 blur-3xl animate-float-reverse" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-md">
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 shadow-glow">
            <ShieldCheck className="h-10 w-10 text-accent" />
          </div>

          <h1 className="font-display text-3xl font-bold text-fc-text mb-3">
            Bem-vindo de volta!
          </h1>
          <p className="text-muted text-base mb-10">
            Sua jornada de controle financeiro continua aqui. Veja como suas finanças evoluíram.
          </p>

          {/* Decorative stat cards */}
          <div className="w-full space-y-4">
            <div className="rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-5 shadow-card animate-fade-up">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10">
                  <Wallet className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm text-muted">Saldo economizado este mês</span>
              </div>
              <p className="text-2xl font-display font-bold text-fc-text">
                R$ 1.240
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-5 shadow-card animate-fade-up-delay-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent2/10">
                  <TrendingUp className="h-5 w-5 text-accent2" />
                </div>
                <span className="text-sm text-muted">Dívidas quitadas</span>
              </div>
              <p className="text-2xl font-display font-bold text-fc-text">
                3 de 5
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel - form */}
      <div className="flex w-full md:w-1/2 flex-col items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="inline-block mb-12">
            <Logo size="lg" />
          </Link>

          {/* Heading */}
          <h2 className="font-display text-3xl font-bold text-fc-text mb-2">
            Acesse sua conta
          </h2>
          <p className="text-muted mb-8">
            Continue sua jornada financeira
          </p>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-fc-text">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-fc-text">
                  Senha
                </label>
                <Link
                  href="#"
                  className="text-sm text-accent hover:text-accent-hover transition-colors"
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-12"
              />
            </div>

            <Button type="submit" size="lg" className="w-full mt-2">
              Entrar
            </Button>
          </form>

          {/* Sign up link */}
          <p className="mt-8 text-center text-sm text-muted">
            Não tem conta?{" "}
            <Link
              href="/cadastro"
              className="text-accent font-medium hover:text-accent-hover transition-colors"
            >
              Criar conta
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
