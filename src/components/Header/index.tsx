import { Imagem, Logo, TextHeader } from './styles'

import fundoImg from '../../assets/Fundo.png'
import logo from '../../assets/logo.svg'

const Header = () => (
    <Imagem style={{ backgroundImage: `url(${fundoImg})` }}>
        <Logo src={logo} alt="efood" />
        <TextHeader>
            Viva experiências gastronômicas no conforto da sua casa
        </TextHeader>
    </Imagem>
)

export default Header