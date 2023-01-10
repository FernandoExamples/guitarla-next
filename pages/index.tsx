import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Layout from '../components/layout'
import ListadoGuitarras from '../components/listado-guitarras'
import { getCurso } from '../network/services/curso.server'
import { getGuitars } from '../network/services/guitars.server'
import { getPosts } from '../network/services/post.server'
import ListadoPosts from '../components/listado-posts'
import Curso from '../components/curso'

export default function Home({ curso, guitarras, posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <main className="contenedor">
        <h2 className="heading">Nuestra Colección</h2>
        <ListadoGuitarras guitarras={guitarras}></ListadoGuitarras>
      </main>

      <Curso curso={curso}></Curso>

      <section className="contenedor">
        <h2 className="heading">Nuestro Blog</h2>
        <ListadoPosts posts={posts}></ListadoPosts>
      </section>
    </Layout>
  )
}

export const getStaticProps = async ({}: GetStaticPropsContext) => {
  const data = await Promise.all([getGuitars(), getPosts(), getCurso()])
  const guitarras = data[0]
  const posts = data[1]
  const curso = data[2]

  return {
    props: { guitarras, posts, curso },
  }
}
