import React from 'react'
import { Post } from '../entities/Post'
import PostComponent from './post'
import styles from '../styles/grid.module.css'

interface Props {
  posts: Post[]
}

export default function ListadoPosts({ posts }: Props) {
  return (
    <div className={`contenedor ${styles.grid}`}>
      {posts.map((item) => (
        <PostComponent key={item.id} post={item}></PostComponent>
      ))}
    </div>
  )
}
