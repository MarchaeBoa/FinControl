import { Sidebar } from "@/components/layout/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-bg">
      <Sidebar />
      <main className="ml-[260px] flex-1 px-8 pb-8">
        {children}
      </main>
    </div>
  )
}
