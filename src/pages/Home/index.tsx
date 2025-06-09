import { useEffect, useState } from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

import type { Restaurante } from '../../types'
import { getRestaurantes } from '../../services/api' // ✅ nova importação

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurante[]>([])

  useEffect(() => {
    getRestaurantes().then((dados) => {
      setRestaurants(dados)
    })
  }, [])

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurants} />
      <Footer />
    </>
  )
}

export default Home
