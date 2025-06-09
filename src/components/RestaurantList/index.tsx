import { Container } from "../../styles"
import { List } from './styles'

import Restaurant from "../Restaurant"
import type { Restaurants } from '../../pages/Home'

type Props = {
    restaurants: Restaurants[]
}

const RestaurantList = ({restaurants}: Props) => {
    const getRestaurantTags = (restaurants: Restaurants) => {
        const tags = [];
        if (restaurants.destacado) {
            tags.push(`${restaurants.destacado ? 'Destaque do dia' : ''}`)
        }
        if (restaurants.tipo) {
            tags.push(restaurants.tipo)
        }
        return tags
    }

    return (
        <Container>
            <List>
                {restaurants.map(restaurants => (
                    <Restaurant 
                        key={restaurants.id}
                        id={restaurants.id}
                        classification={restaurants.avaliacao}
                        description={restaurants.descricao}
                        image={restaurants.capa}
                        infos={getRestaurantTags(restaurants)}
                        title={restaurants.titulo}
                    />
                ))}
            </List>
        </Container>
    )
}



export default RestaurantList