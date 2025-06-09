import fundoImg from '../../assets/Fundo.png'
import logo from '../../assets/logo.svg'


import {Imagem, Text, Banner, TextBanner, RestaurantName} from './styles'
import { Container } from '../../styles'
import { Link } from 'react-router-dom'

type Props = {
    tipo: string
    titulo: string
    capa: string
}

const HeaderBanner = ({ capa, tipo, titulo }: Props) => (
    <>
    <Imagem style={{ backgroundImage: `url(${fundoImg})` }}>
        <Text>Restaurantes</Text>
        <Link to="/">
            <img src={logo} alt="Efood" />
        </Link>
        <Text>0 produto(s) no carrinho</Text>
    </Imagem>
    <Banner style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${capa})`}}>
        <Container>
            <TextBanner>{tipo}</TextBanner>
            <RestaurantName>{titulo}</RestaurantName>
        </Container>
    </Banner>
    </>
)

export default HeaderBanner