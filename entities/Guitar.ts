import { Image } from './Image'

export interface Guitar {
  id: number
  attributes: GuitarAttributes
}

interface GuitarAttributes {
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  descripcion: string
  precio: number
  url: string
  image?: Image
}
