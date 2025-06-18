import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import { useGetRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants, isLoading, error } = useGetRestaurantesQuery()

  if (isLoading) {
    return <p>Carregando restaurantes...</p>
  }

  if (error || !restaurants) {
    return <p>Erro ao carregar os restaurantes.</p>
  }

  if (restaurants.length === 0) {
    return <p>Nenhum restaurante disponível no momento.</p>
  }

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurants} />
      <Footer />
    </>
  )
}

export default Home
