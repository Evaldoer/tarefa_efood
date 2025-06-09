import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'
import HeaderBanner from '../../components/HeaderBanner'

import type { Restaurante } from '../../types'
import { getRestaurantePorId } from '../../services/api' // ✅ novo import

const Perfil = () => {
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      getRestaurantePorId(id).then((data) => {
        setRestaurante(data)
      })
    }
  }, [id])

  if (!restaurante) {
    return <p>Carregando restaurante...</p>
  }

  return (
    <>
      <HeaderBanner
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
        capa={restaurante.capa}
      />
      <FoodList foods={restaurante.cardapio} />
      <Footer />
    </>
  )
}

export default Perfil
