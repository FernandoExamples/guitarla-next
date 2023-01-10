import { Post } from '../../entities/Post'
import axiosClient from '../axios'

export async function getPosts(): Promise<Post[]> {
  const resp = await axiosClient.get(`/posts?populate=image`)
  return resp.data.data
}

export async function getPost(url: string): Promise<Post | undefined> {
  const resp = await axiosClient.get(`/posts?filters[url]=${url}&populate=image`)
  return resp.data.data[0]
}
