import Head from 'next/head'
import React from 'react'
import Footer from './footer'
import Header from './header'

interface Props {
  children: React.ReactNode
  title?: string
  description?: string
}

export default function Layout({ children, title, description }: Props) {
  return (
    <>
      <Head>
        <title>{'GuitarLA' + (title ? ` - ${title}` : '')}</title>
        {description && <meta name="description" content={'GuitarLA - ' + description} />}
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}
