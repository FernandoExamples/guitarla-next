import '../styles/globals.css'
import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { CarritoProvider } from '../context/carrito.context'

export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (
    <CarritoProvider>
      <Component {...pageProps} />
    </CarritoProvider>
  ) : null
}
