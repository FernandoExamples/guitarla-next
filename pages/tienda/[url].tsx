import { getGuitar } from '../../network/services/guitars.server'
import { GetServerSidePropsContext, InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Layout from '../../components/layout'
import styles from '../../styles/tienda.module.css'

export default function Guitarra({ guitarra }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { name, descripcion, image, precio } = guitarra?.attributes || {}

  return (
    <Layout>
      <div className={styles.guitarra}>
        <img src={image?.data.attributes.url} alt="IMagen del producto" className="imagen" />

        <div className={styles.contenido}>
          <h3>{name}</h3>
          <p className="texto">{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form className={styles.formulario}>
            <label htmlFor="cantidad">Cantidad</label>
            <select id="cantidad">
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
