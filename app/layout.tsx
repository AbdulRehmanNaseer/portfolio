import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abdul Rehman Naseer - Data Science Student & Portfolio",
  description:
    "Professional portfolio of Abdul Rehman Naseer, a passionate Data Science student from Gujranwala, Pakistan, specializing in machine learning, data analysis, and AI. Explore my projects, skills, and experience.",
  keywords:
    "data science, machine learning, AI, python, portfolio, student, analytics, data visualization, Pakistan, Gujranwala",
  authors: [{ name: "Abdul Rehman Naseer" }],
  creator: "Abdul Rehman Naseer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdulrehman-portfolio.vercel.app",
    title: "Abdul Rehman Naseer - Data Science Student & Portfolio",
    description:
      "Professional portfolio showcasing data science projects, skills, and experience from Gujranwala, Pakistan.",
    siteName: "Abdul Rehman Naseer Portfolio",
    images: [
      {
        url: "/images/abdulrehman-profile.png",
        width: 1200,
        height: 630,
        alt: "Abdul Rehman Naseer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman Naseer - Data Science Student & Portfolio",
    description: "Professional portfolio showcasing data science projects, skills, and experience from Pakistan.",
    creator: "@abdulrehmannaseer",
    images: ["/images/abdulrehman-profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
