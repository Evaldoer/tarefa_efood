import { useGetRestaurantesQuery } from '../../services/api'
import { Listagem } from '../../containers/Listagem'
import Header from '../../components/Header'

const Home = () => {
  const {
    data: restaurantes,
    isLoading,
    isError
  } = useGetRestaurantesQuery()

  if (isLoading) {
    return <h4 style={{ textAlign: 'center' }}>Carregando restaurantes...</h4>
  }

  if (isError || !restaurantes) {
    return (
      <h4 style={{ textAlign: 'center', color: 'red' }}>
        Ocorreu um erro ao carregar os restaurantes. Tente novamente mais tarde.
      </h4>
    )
  }

  return (
    <>
      <Header type="headerHome" />
      <Listagem restaurantes={restaurantes} />
    </>
  )
}

export default Home
