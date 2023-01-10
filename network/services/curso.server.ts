import { Curso } from '../../entities/Curso'
import axiosClient from '../axios'

export async function getCurso(): Promise<Curso> {
  const resp = await axiosClient.get(`/curso?populate=image`)
  return resp.data.data
}
