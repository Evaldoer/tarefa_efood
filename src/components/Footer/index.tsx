import { ContainerFooter, Logo, ListLogos, TextFooter } from './styles'

import logo from '../../assets/logo.svg'
import instagramLogo from '../../assets/instagram.svg'
import twitterLogo from '../../assets/twitter.svg'
import facebookLogo from '../../assets/facebook.svg'



const Footer = () => (
    <ContainerFooter>
        <Logo src={logo}  alt='Efood'/>
        <ListLogos>
            <li>
                <a href="#">
                    <img src={instagramLogo} alt="Instagram" />
                </a>
            </li>
            <li id='twitter'>
                <a href="#">
                    <img src={twitterLogo} alt="Instagram" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src={facebookLogo} alt="Instagram" />
                </a>
            </li>
        </ListLogos>
        <TextFooter>
            A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
        </TextFooter>
    </ContainerFooter>
)

export default Footer