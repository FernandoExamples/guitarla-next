import { Image } from './Image'

export interface Post {
  id: number
  attributes: PostAttributes
}

interface PostAttributes {
  title: string
  content: string
  url: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  image: Image
}
