import { Curso as CursoEntity } from '../entities/Curso'
import styles from '../styles/curso.module.css'

interface Props {
  curso: CursoEntity
}

export default function Curso({ curso }: Props) {
  const { content, title, image } = curso.attributes
  return (
    <section
      className={styles.curso}
      style={{
        backgroundImage: `linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${image.data.attributes.url})`,
      }}
    >
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{title}</h2>
          <p className={styles.texto}>{content}</p>
        </div>
      </div>
    </section>
  )
}
