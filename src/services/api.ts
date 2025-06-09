// src/services/api.ts
import axios from 'axios'
import type { Restaurante } from '../types'

const api = axios.create({
  baseURL: 'https://fake-api-tau.vercel.app/api/efood'
})

// Busca todos os restaurantes
export const getRestaurantes = async () => {
  const response = await api.get<Restaurante[]>('/restaurantes')
  return response.data
}

// Busca restaurante específico
export const getRestaurantePorId = async (id: string) => {
  const response = await api.get<Restaurante>(`/restaurantes/${id}`)
  return {
    ...response.data,
    cardapio: response.data.cardapio.map((item) => ({
      ...item,
      preco: Number(item.preco)
    }))
  }
}
