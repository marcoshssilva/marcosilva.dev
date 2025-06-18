import type { Metadata, Viewport } from 'next'
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
  title: 'Marco Silva.Dev | Desenvolvedor',
  description: 'Descubra o portfólio de Marcos Silva, desenvolvedor de software especializado em projetos web, nuvem e soluções personalizadas. Explore exemplos de trabalhos com Java, Node.js, Python e outras tecnologias modernas, destacando qualidade e inovação.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1.5,
  userScalable: false,
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
