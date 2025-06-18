import { Container } from '../../styles'
import { List } from './styles'

import Restaurant from '../Restaurant'
import type { Restaurante } from '../../types'

type Props = {
  restaurants: Restaurante[]
}

const RestaurantList = ({ restaurants }: Props) => {
  const getRestaurantTags = (restaurant: Restaurante): string[] => {
    const tags = []
    if (restaurant.destacado) {
      tags.push('Destaque do dia')
    }
    if (restaurant.tipo) {
      tags.push(restaurant.tipo)
    }
    return tags
  }

  return (
    <Container>
      {restaurants.length === 0 ? (
        <p>Nenhum restaurante disponível no momento.</p>
      ) : (
        <List>
          {restaurants.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              id={restaurant.id}
              classification={restaurant.avaliacao}
              description={restaurant.descricao}
              image={restaurant.capa}
              infos={getRestaurantTags(restaurant)}
              title={restaurant.titulo}
            />
          ))}
        </List>
      )}
    </Container>
  )
}

export default RestaurantList
