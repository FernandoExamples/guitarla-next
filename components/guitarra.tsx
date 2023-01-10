import Image from 'next/image'
import Link from 'next/link'
import { Guitar } from '../entities/Guitar'
import styles from '../styles/tienda.module.css'

interface Props {
  guitarra: Guitar
}

const Guitarra = ({ guitarra }: Props) => {
  const { descripcion, image, precio, url, name } = guitarra.attributes
  return (
    <div className={styles.guitarra}>
      <Image width={600} height={400} src={image?.data.attributes.formats.medium.url || ''} alt="Imagen del producto" />
      <div className={styles.contenido}>
        <h3>{name}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>

        <Link className="enlace" href={`/tienda/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  )
}

export default Guitarra
