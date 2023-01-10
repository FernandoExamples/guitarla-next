import { InferGetStaticPropsType } from 'next'
import Layout from '../components/layout'
import ListadoPosts from '../components/listado-posts'
import { getPosts } from '../network/services/post.server'

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title="Blog">
      <h2 className="heading">Blog</h2>
      <ListadoPosts posts={posts}></ListadoPosts>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = await getPosts()

  return {
    props: { posts },
  }
}
