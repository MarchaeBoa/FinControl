export interface KPIData {
  title: string
  value: string
  change: number
  changeLabel: string
  icon: string
  color: "green" | "red" | "purple" | "orange"
}

export interface Transaction {
  id: string
  name: string
  category: string
  amount: number
  type: "income" | "expense"
  date: string
  icon: string
}

export interface Debt {
  id: string
  name: string
  totalAmount: number
  paidAmount: number
  monthlyPayment: number
  dueDate: string
  installments: { paid: number; total: number }
}

export interface Goal {
  id: string
  name: string
  targetAmount: number
  currentAmount: number
  deadline: string
  icon: string
  color: string
}

export interface BudgetCategory {
  id: string
  name: string
  icon: string
  budget: number
  spent: number
  color: string
}

export interface NavItem {
  label: string
  href: string
  icon: string
  badge?: string
}

export interface User {
  name: string
  email: string
  plan: "free" | "pro" | "family"
  avatar?: string
}
