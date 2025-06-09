export interface CardapioItem {
  id: number
  nome: string
  descricao: string
  preco: number
  porcao: string
  foto: string
}

export interface Restaurante {
  id: number
  titulo: string
  tipo: string
  capa: string
  foto: string
  infos: string[]
  destacado: boolean
  avaliacao: string
  descricao: string
  cardapio: CardapioItem[]
}
