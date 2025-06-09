import { Link } from 'react-router-dom'

import { ContainerRest, Description, Infos, TitleRow, Titulo, Nota, Imagem } from './styles'
import estrelaImg from '../../assets/estrela.png'
import Tag from '../Tag'

type Props = {
  id: number
  title: string
  image: string
  description: string
  classification: string
  infos: string[]
}

const Restaurant = ({
  description,
  image,
  title,
  classification,
  infos,
  id
}: Props) => (
  <ContainerRest>
    <Imagem src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag size="big" key={info}>
          {info}
        </Tag>
      ))}
    </Infos>
    <TitleRow>
      <Titulo>{title}</Titulo>
      <Nota>
        {classification}
        <img src={estrelaImg} alt="Estrela" />
      </Nota>
    </TitleRow>
    <Description>{description}</Description>
    <Link to={`/perfil/${id}`}>
      <Tag size="small">Saiba mais</Tag>
    </Link>
  </ContainerRest>
)

export default Restaurant
