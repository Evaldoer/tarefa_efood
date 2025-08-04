import { CardapioItem } from '../../components/CardapioItem'
import { ListaCardapio } from './styles'

type Props = {
  items: MenuItensType[]
}

export const Cardapio = ({ items }: Props) => {
  if (!items || items.length === 0) {
    return (
      <div className="container">
        <p>Nenhum item encontrado no cardápio.</p>
      </div>
    )
  }

  return (
    <ListaCardapio className="container">
      {items.map((item) => (
        <CardapioItem
          key={item.id}
          itens={item}
          nome={item.nome}
          porcao={item.porcao}
          preco={item.preco}
          descricao={item.descricao}
          foto={item.foto}
          id={item.id}
        />
      ))}
    </ListaCardapio>
  )
}
