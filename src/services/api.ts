import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Restaurante } from '../types'

export const efoodApi = createApi({
  reducerPath: 'efoodApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => '/restaurantes'
    }),
    getRestaurantePorId: builder.query<Restaurante, string>({
      query: (id) => `/restaurantes/${id}`,
      transformResponse: (response: Restaurante) => ({
        ...response,
        cardapio: response.cardapio.map((item) => ({
          ...item,
          preco: Number(item.preco)
        }))
      })
    })
  })
})

// Hooks gerados automaticamente pelo RTK Query
export const {
  useGetRestaurantesQuery,
  useGetRestaurantePorIdQuery
} = efoodApi
