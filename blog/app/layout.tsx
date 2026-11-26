import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { SkipLink } from "@/components/layout/skip-link"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Access by design",
    template: "%s | Access by design",
  },
  description:
    "A student digital blog on EECS, accessibility failures in software and interfaces, and justice-oriented engineering.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SkipLink />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
