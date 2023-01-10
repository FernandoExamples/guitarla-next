import Image from 'next/image'
import React from 'react'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout title="Nosotros" description="Sobre Nosotros">
      <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={80} alt="Imagen sobre nosotros" />

          <div className="">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis harum nemo debitis magnam incidunt,
              molestiae vel iste repudiandae! Tenetur doloremque neque cumque quo aut nobis quis, at qui optio vel.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, incidunt magni, architecto numquam natus
              sed fuga expedita quae esse sit voluptatem velit culpa suscipit perspiciatis nemo, corporis nam illo
              nulla.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis harum nemo debitis magnam incidunt,
              molestiae vel iste repudiandae! Tenetur doloremque neque cumque quo aut nobis quis, at qui optio vel.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, incidunt magni, architecto numquam natus
              sed fuga expedita quae esse sit voluptatem velit culpa suscipit perspiciatis nemo, corporis nam illo
              nulla.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
