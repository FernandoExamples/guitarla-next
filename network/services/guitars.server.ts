import type { Guitar } from '../../entities/Guitar'
import axiosClient from '../axios'

export async function getGuitars(): Promise<Guitar[]> {
  const resp = await axiosClient.get(`/guitars?populate=image`)
  return resp.data.data
}

export async function getGuitar(url: string): Promise<Guitar | null> {
  const resp = await axiosClient.get(`/guitars?filters[url]=${url}&populate=image`)
  return resp.data.data[0] || null
}
