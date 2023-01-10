import { InferGetServerSidePropsType } from 'next'
import React from 'react'
import Layout from '../components/layout'
import ListadoGuitarras from '../components/listado-guitarras'
import { getGuitars } from '../network/services/guitars.server'

export default function Tienda({ guitarras }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout title="Tienda Virtual">
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>

        <ListadoGuitarras guitarras={guitarras} />
      </main>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const guitarras = await getGuitars()

  return {
    props: { guitarras },
  }
}
