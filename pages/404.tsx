import Link from 'next/link'
import React from 'react'
import Layout from '../components/layout'

export default function Page404() {
  return (
    <Layout title="Pagina no encontrada">
      <p className="error">Pagina No encontrada</p>
      <Link href="/" className="error-enlace">
        Tal vez quieras volver a la página principal
      </Link>
    </Layout>
  )
}
