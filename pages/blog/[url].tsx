import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Layout from '../../components/layout'
import { getPost } from '../../network/services/post.server'
import { formatDate } from '../../utils/helpers'

import styles from '../../styles/blog.module.css'
import Image from 'next/image'

export default function Post({ post }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { content, title, publishedAt, image } = post.attributes

  return (
    <Layout title={title}>
      <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image width={1000} height={400} className="imagen" src={image.data.attributes.url} alt="Imagen del post" />
        <div className={styles.contenido}>
          <h3>{title}</h3>
          <p className={styles.fecha}>{formatDate(publishedAt)}</p>
          <p className={styles.texto}>{content}</p>
        </div>
      </article>
    </Layout>
  )
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const post = await getPost(query.url!.toString())
  if (!post) return { notFound: true }

  return {
    props: { post },
  }
}
