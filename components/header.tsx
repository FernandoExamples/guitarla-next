import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCarritoContext } from '../context/carrito.context'
import styles from '../styles/header.module.css'

export default function Header() {
  const { pathname } = useRouter()
  const { carrito } = useCarritoContext()

  const getNavClass = (path: string) => (pathname == path ? styles.active : '')

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href={'/'}>
          <Image src="/img/logo.svg" width={300} height={40} alt="Imagen logotipo" className={styles.logo} />
        </Link>

        <nav className={styles.navegacion}>
          <Link href="/" className={getNavClass('/')}>
            Inicio
          </Link>
          <Link href="/nosotros" className={getNavClass('/nosotros')}>
            Nosotros
          </Link>
          <Link href="/blog" className={getNavClass('/blog')}>
            Blog
          </Link>
          <Link href="/tienda" className={getNavClass('/tienda')}>
            Tienda
          </Link>

          <Link href="/carrito" className={getNavClass('/carrito')}>
            <img src="/img/carrito.png" alt="" width={30} height={25} /> (
            {carrito.reduce((total, current) => total + current.cantidad, 0)})
          </Link>
        </nav>
      </div>
    </header>
  )
}
