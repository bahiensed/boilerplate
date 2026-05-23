import type { Metadata } from 'next'
import { geist, geistMono } from '@/fonts'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'

import { ThemeProvider } from '@/components/layout/theme/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: 'Boilerplate',
  description: 'Boilerplate',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={cn("h-full", "antialiased", geist.variable, geistMono.variable)}
      lang="en-US"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            <Toaster richColors />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
