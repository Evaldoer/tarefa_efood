import RestauranteItem from '../../components/RestauranteItem'
import { ListaRestaurantes } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

export const Listagem = ({ restaurantes }: Props) => {
  // Gera tags com base nas propriedades do restaurante
  const getTags = (restaurante: Restaurante): string[] => {
    const tags: string[] = []

    if (restaurante.destacado) {
      tags.push('Destaque da semana')
    }

    if (restaurante.tipo) {
      // Capitaliza o primeiro caractere do tipo
      tags.push(restaurante.tipo[0].toUpperCase() + restaurante.tipo.slice(1))
    }

    return tags
  }

  if (!restaurantes || restaurantes.length === 0) {
    return (
      <div className="container">
        <p>Nenhum restaurante encontrado.</p>
      </div>
    )
  }

  return (
    <ListaRestaurantes className="container">
      {restaurantes.map((restaurante) => (
        <li key={restaurante.id}>
          <RestauranteItem
            titulo={restaurante.titulo}
            capa={restaurante.capa}
            tipo={getTags(restaurante)}
            descricao={restaurante.descricao}
            avaliacao={restaurante.avaliacao}
            id={restaurante.id}
          />
        </li>
      ))}
    </ListaRestaurantes>
  )
}
