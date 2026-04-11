export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-bg">
      <main className="mx-auto max-w-7xl">{children}</main>
    </div>
  )
}
