// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import { efoodApi } from '../services/api'
import cartReducer from './reducers/cart'

// Criação da store
export const store = configureStore({
  reducer: {
    cart: cartReducer, // Reducer do carrinho
    [efoodApi.reducerPath]: efoodApi.reducer // Reducer da API RTK Query
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(efoodApi.middleware) // Middleware da API
})

// Tipos auxiliares para uso com hooks
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
