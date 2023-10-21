'use client'
import React, { useState } from 'react'
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css'
import { Roboto } from 'next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const roboto = Roboto({
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

function MyApp({ Component, pageProps }) {

  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      }),
  )


  return (
    <QueryClientProvider client={queryClient}>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp);
