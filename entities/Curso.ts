import { Image } from './Image'

export interface Curso {
  id: number
  attributes: Attributes
}

interface Attributes {
  title: string
  content: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  image: Image
}
