'use client'
import React from 'react'
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css'
import { Roboto } from 'next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import axios from 'axios';

axios.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "access_token"
    )}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    console.log(error);
    if (error.response && error.response.status === 401) {
      const isAvaibleToken = localStorage.getItem('refresh_token')
      
        if (isAvaibleToken) {
          return axios.post('/api/auth/refresh', { "refresh_token": isAvaibleToken })
            .then(response => {
              console.log(response);
              // Yeni access token alındıysa isteği tekrarla ve işlemi tamamla
              localStorage.setItem(response?.data.access_token)
              localStorage.setItem(response?.data.refresh_token)
              error.config.headers['Authorization'] = 'Bearer ' + response?.data.access_token;
              return axios.request(error.config);
            })
            .catch (err => {
              console.log(err);
              window.location.href = "/login";
              localStorage.removeItem("access_token");
              localStorage.removeItem("refresh_token");
              return Promise.reject();
            })
        }
      } 
    }
);

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
