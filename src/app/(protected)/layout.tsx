import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/layout/sidebar/app-sidebar'
import { ModeToggle } from '@/components/layout/theme/mode-toggle'

export default async function ProtectedPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "12rem",
          "--sidebar-width-mobile": "12rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <div className="flex flex-col min-h-screen w-full">
        <header className="backdrop-blur-md bg-background/75 border-b flex items-center justify-between px-4 py-2 sticky supports-[backdrop-filter]:bg-background/75 top-0 z-30">
          <SidebarTrigger />
          <div>
            <ModeToggle />
          </div>
        </header>

        <main className="overflow-y-auto px-6 md:px-8 py-6">
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}
