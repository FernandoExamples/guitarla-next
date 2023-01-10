import { getGuitar } from '../../network/services/guitars.server'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Layout from '../../components/layout'
import styles from '../../styles/tienda.module.css'
import { FormEvent, useState } from 'react'
import { CartItem } from '../../entities/cartItem'
import { useCarritoContext } from '../../context/carrito.context'

export default function Guitarra({ guitarra }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { name, descripcion, image, precio } = guitarra?.attributes || {}
  const [cantidad, setCantidad] = useState(0)
  const { agregarCarrito } = useCarritoContext()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (cantidad < 1) return alert('Selecciona una cantidad')

    const cartItem: CartItem = {
      id: guitarra.id,
      image: image?.data.attributes.url,
      name,
      precio,
      cantidad,
    }

    agregarCarrito(cartItem)
  }

  return (
    <Layout>
      <div className={styles.guitarra}>
        <img src={image?.data.attributes.url} alt="IMagen del producto" className="imagen" />

        <div className={styles.contenido}>
          <h3>{name}</h3>
          <p className="texto">{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label htmlFor="cantidad">Cantidad</label>
            <select id="cantidad" value={cantidad} onChange={(e) => setCantidad(Number(e.target.value))}>
              <option value="0" disabled>
                -- Selecione --
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Añadir al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const guitarra = await getGuitar(query.url?.toString()!)

  if (!guitarra) return { notFound: true }

  return {
    props: { guitarra },
  }
}
