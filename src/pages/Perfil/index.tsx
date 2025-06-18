// src/pages/Perfil/index.tsx
import { useParams } from 'react-router-dom'
import { useGetRestaurantePorIdQuery } from '../../services/api'

import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'
import HeaderBanner from '../../components/HeaderBanner'

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante, isLoading, error } = useGetRestaurantePorIdQuery(id || '')

  if (isLoading) {
    return <p>Carregando restaurante...</p>
  }

  if (error || !restaurante) {
    return <p>Erro ao carregar restaurante.</p>
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
