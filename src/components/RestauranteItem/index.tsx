import Tag from '../Tag'
import { ButtonLink } from '../Button/styles'
import estrela from '../../assets/star.png'
import * as S from './styles'

type Props = {
  titulo: string
  avaliacao: number
  descricao: string
  tipo: string[]
  capa: string
  id: number
}

const RestauranteItem = ({
  titulo,
  avaliacao,
  descricao,
  tipo,
  capa,
  id
}: Props) => {
  const getDescricao = (text: string) => {
    return text.length > 140 ? `${text.slice(0, 137)}...` : text
  }

  return (
    <S.RestauranteContainer>
      <S.ImageCover src={capa} alt={`Imagem do restaurante ${titulo}`} />

      <S.Infos>
        {tipo.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </S.Infos>

      <S.ContainerInfo>
        <S.TituloContainer>
          <h2>{titulo}</h2>
          <span aria-label={`Avaliação: ${avaliacao} estrelas`}>
            {avaliacao.toFixed(1)} <img src={estrela} alt="Ícone de estrela" />
          </span>
        </S.TituloContainer>

        <S.Descricao>{getDescricao(descricao)}</S.Descricao>

        <S.ButtonSpace>
          <ButtonLink to={`/perfil/${id}`} title={`Acessar o perfil de ${titulo}`}>
            Saiba mais
          </ButtonLink>
        </S.ButtonSpace>
      </S.ContainerInfo>
    </S.RestauranteContainer>
  )
}

export default RestauranteItem
