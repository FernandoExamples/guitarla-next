import React from 'react'
import { Guitar } from '../entities/Guitar'
import Guitarra from './guitarra'
import styles from '../styles/tienda.module.css'

interface Props {
  guitarras: Guitar[]
}

export default function ListadoGuitarras({ guitarras }: Props) {
  return (
    <div className={styles['guitarras-grid']}>
      {guitarras.map((item) => (
        <Guitarra key={item.id} guitarra={item} />
      ))}
    </div>
  )
}
