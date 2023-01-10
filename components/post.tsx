import Link from 'next/link'
import { Post as PostEntity } from '../entities/Post'
import { formatDate } from '../utils/helpers'

import styles from '../styles/blog.module.css'

interface Props {
  post: PostEntity
}

export default function Post({ post }: Props) {
  const { content, image, title, url, publishedAt } = post.attributes
  return (
    <article className={styles.post}>
      <img className="imagen" src={image.data.attributes.formats.medium.url} alt="Imagen del post" />
      <div className={styles.contenido}>
        <h3>{title}</h3>
        <p className={styles.fecha}>{formatDate(publishedAt)}</p>
        <p className={styles.resumen}>{content}</p>
        <Link href={`/blog/${url}`} className={styles.enlace}>
          Leer entrada
        </Link>
      </div>
    </article>
  )
}
