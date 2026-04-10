"use client"

import Link from "next/link"
import { Rocket, ChartNoAxesCombined, ShieldCheck, Zap } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CadastroPage() {
  return (
    <div className="flex min-h-screen bg-bg">
      {/* Left panel - decorative */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden flex-col items-center justify-center p-12 bg-gradient-to-br from-accent2/20 via-accent/10 to-accent/20">
        {/* Background blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-accent2/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-3xl animate-float-reverse" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-md">
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent2/10 border border-accent2/20 shadow-glow">
            <Rocket className="h-10 w-10 text-accent2" />
          </div>

          <h1 className="font-display text-3xl font-bold text-fc-text mb-3">
            Comece sua jornada!
          </h1>
          <p className="text-muted text-base mb-10">
            Milhares de pessoas já transformaram sua relação com o dinheiro. Agora é a sua vez.
          </p>

          {/* Feature bullets */}
          <div className="w-full space-y-4">
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-4 shadow-card animate-fade-up">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <ChartNoAxesCombined className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-fc-text">Controle total</p>
                <p className="text-xs text-muted">Visualize receitas, despesas e investimentos em um só lugar</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-4 shadow-card animate-fade-up-delay-1">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent2/10">
                <ShieldCheck className="h-5 w-5 text-accent2" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-fc-text">Segurança máxima</p>
                <p className="text-xs text-muted">Seus dados protegidos com criptografia de ponta</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-4 shadow-card animate-fade-up-delay-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent3/10">
                <Zap className="h-5 w-5 text-accent3" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-fc-text">Insights inteligentes</p>
                <p className="text-xs text-muted">IA que analisa seus hábitos e sugere melhorias</p>
              </div>
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
            Crie sua conta
          </h2>
          <p className="text-muted mb-8">
            Comece a controlar suas finanças
          </p>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-fc-text">
                  Nome completo
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  className="h-12"
                />
              </div>

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
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-fc-text">
                Senha
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="confirm-password" className="block text-sm font-medium text-fc-text">
                Confirmar senha
              </label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                className="h-12"
              />
            </div>

            <Button type="submit" size="lg" className="w-full mt-2">
              Criar conta grátis
            </Button>
          </form>

          {/* Login link */}
          <p className="mt-8 text-center text-sm text-muted">
            Já tem conta?{" "}
            <Link
              href="/login"
              className="text-accent font-medium hover:text-accent-hover transition-colors"
            >
              Fazer login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
