import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MRR Forecaster — Predict Stripe Revenue Growth',
  description: 'Analyze your Stripe subscription data to forecast MRR, churn, and growth trajectories. Built for solo SaaS founders making $1K–$50K MRR.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4744acb1-ccfc-48a2-9ca4-455d624cb3f5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
