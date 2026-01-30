import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })

export const metadata: Metadata = {
  title: "Luis Sergio Burgos | CV 2026",
  description: "Growth Marketing Specialist | B2C, B2B & Marketplaces",
  generator: "v0.app",
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  )
}
