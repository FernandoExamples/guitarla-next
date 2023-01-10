import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import { useCarritoContext } from '../context/carrito.context'
import styles from '../styles/carrito.module.css'

export default function Carrito() {
  const { carrito, updateQuantity, deleteGuitarra } = useCarritoContext()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const calculoTotal = carrito.reduce((total, current) => total + current.cantidad * current.precio, 0)
    setTotal(calculoTotal)
  }, [carrito])

  return (
    <Layout title="Carrito de compras">
      <h1 className="heading">Carrito</h1>

      <div className={styles.contenido}>
        <div className={styles.carrito}>
          <h2>Articulos</h2>
          {carrito.length == 0 && <p>El carrito está vació</p>}

          {carrito.map((item) => (
            <div key={item.id} className={styles.producto}>
              <div>
                <Image src={item.image} width={600} height={200} alt="Imagen del producto" />
              </div>
              <div>
                <p className={styles.nombre}>{item.name}</p>

                <p>Cantidad:</p>
                <select
                  defaultValue={item.cantidad}
                  onChange={(e) => updateQuantity(item, Number(e.target.value))}
                  className={styles.select}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>

                <p className={styles.precio}>Precio: $ {item.precio}</p>
                <p className={styles.subtotal}>
                  Subtotal: $ <span>{item.precio * item.cantidad}</span>
                </p>
              </div>

              <button type="button" className={styles.btnEliminar} onClick={() => deleteGuitarra(item)}>
                X
              </button>
            </div>
          ))}
        </div>

        <aside className={styles.resumen}>
          <h3>Resumen del Pedido</h3>
          <p>Total a pagar: ${total}</p>
        </aside>
      </div>
    </Layout>
  )
}
