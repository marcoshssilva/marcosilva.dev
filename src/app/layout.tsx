import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// roboto font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// global style
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'marcoshssilva.com.br | Full-Stack Developer',
  description: 'Sou um Desenvolvedor FullStack com alguns anos de experiência. Atualmente, focado em desenvolvimento de aplicações voltadas para microserviços e escalabilidade vertical.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
        {/* https://vercel.com/docs/speed-insights/quickstart#add-the-speedinsights-component-to-your-app */}
        <SpeedInsights />
        {/* https://vercel.com/docs/analytics/quickstart#add-the-analytics-component-to-your-app */}
        <Analytics />

      </body>
    </html>
  )
}
