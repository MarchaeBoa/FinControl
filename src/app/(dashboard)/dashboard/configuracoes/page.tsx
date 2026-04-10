"use client"

import { useState } from "react"
import {
  User,
  Bell,
  CreditCard,
  Shield,
  Trash2,
  Mail,
  Smartphone,
  FileBarChart,
  Crown,
  AlertTriangle,
} from "lucide-react"
import { Topbar } from "@/components/layout/topbar"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

function Toggle({
  enabled,
  onToggle,
}: {
  enabled: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200",
        enabled ? "bg-accent" : "bg-surface-2 border-border"
      )}
    >
      <span
        className={cn(
          "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition-transform duration-200",
          enabled ? "translate-x-5" : "translate-x-1"
        )}
      />
    </button>
  )
}

export default function ConfiguracoesPage() {
  const [name, setName] = useState("Marcos Silva")
  const [email, setEmail] = useState("marcos@email.com")
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [weeklyReport, setWeeklyReport] = useState(false)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  return (
    <div className="flex flex-col gap-6 p-6 lg:p-8">
      <Topbar
        title="Configuracoes"
        subtitle="Gerencie sua conta e preferencias"
      />

      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        {/* Profile section */}
        <Card className="animate-fade-up" style={{ animationDelay: "0s" }}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-accent2" />
              <CardTitle>Perfil</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-muted">Nome</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-muted">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
              />
            </div>
            <div className="flex justify-end">
              <Button variant="primary" size="sm">
                Salvar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notifications section */}
        <Card className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-accent3" />
              <CardTitle>Notificacoes</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-0 divide-y divide-border">
            <div className="flex items-center justify-between py-4 first:pt-0">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted" />
                <div>
                  <span className="text-sm font-medium text-fc-text">
                    Alertas por email
                  </span>
                  <p className="text-xs text-muted">
                    Receba alertas de gastos e vencimentos
                  </p>
                </div>
              </div>
              <Toggle
                enabled={emailAlerts}
                onToggle={() => setEmailAlerts(!emailAlerts)}
              />
            </div>
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-3">
                <Smartphone className="h-4 w-4 text-muted" />
                <div>
                  <span className="text-sm font-medium text-fc-text">
                    Notificacoes push
                  </span>
                  <p className="text-xs text-muted">
                    Notificacoes em tempo real no navegador
                  </p>
                </div>
              </div>
              <Toggle
                enabled={pushNotifications}
                onToggle={() => setPushNotifications(!pushNotifications)}
              />
            </div>
            <div className="flex items-center justify-between py-4 last:pb-0">
              <div className="flex items-center gap-3">
                <FileBarChart className="h-4 w-4 text-muted" />
                <div>
                  <span className="text-sm font-medium text-fc-text">
                    Relatorio semanal
                  </span>
                  <p className="text-xs text-muted">
                    Resumo semanal das suas financas por email
                  </p>
                </div>
              </div>
              <Toggle
                enabled={weeklyReport}
                onToggle={() => setWeeklyReport(!weeklyReport)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Plan section */}
        <Card className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-accent" />
              <CardTitle>Plano</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center justify-between rounded-xl border border-accent/20 bg-gradient-to-r from-accent/5 to-accent2/5 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15">
                  <Crown className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm font-bold text-fc-text">
                      Plano Pro
                    </span>
                    <Badge variant="green">Ativo</Badge>
                  </div>
                  <span className="text-xs text-muted">
                    Relatorios avancados, metas ilimitadas e mais
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm">
                Alterar plano
              </Button>
              <Button variant="ghost" size="sm">
                Cancelar assinatura
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Security section */}
        <Card className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-warning" />
              <CardTitle>Seguranca</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-muted">
                Senha atual
              </label>
              <Input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Digite sua senha atual"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-muted">
                Nova senha
              </label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Digite a nova senha"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-muted">
                Confirmar nova senha
              </label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirme a nova senha"
              />
            </div>
            <div className="flex justify-end">
              <Button variant="primary" size="sm">
                Alterar senha
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Danger zone */}
        <Card
          className="animate-fade-up border-danger/20"
          style={{ animationDelay: "0.4s" }}
        >
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-danger" />
              <CardTitle className="text-danger">Zona de Perigo</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <p className="text-sm text-muted">
              Ao excluir sua conta, todos os dados serao permanentemente
              removidos. Esta acao nao pode ser desfeita.
            </p>
            <div>
              <Button variant="danger" size="sm">
                <Trash2 className="h-4 w-4" />
                Excluir minha conta
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
