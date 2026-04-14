import { Toaster } from "@/components/ui/sonner"
import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { SmoothScroll } from "@/components/smooth-scroll"
import { PageLoader } from "@/components/page-loader"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Meridian Partners",
  description: "A research-driven private equity firm connecting emerging markets to global capital.",
  icons: {
    icon: "/meridian-partners/crosshaven-icon.svg",
    apple: "/meridian-partners/crosshaven-icon.svg",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const showLoader = false

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {showLoader && <PageLoader />}
        <SmoothScroll>{children}</SmoothScroll>
        
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
