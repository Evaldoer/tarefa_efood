import { ContainerFooter, Logo, ListLogos, TextFooter } from './styles'

import logo from '../../assets/logo.svg'
import instagramLogo from '../../assets/instagram.svg'
import twitterLogo from '../../assets/twitter.svg'
import facebookLogo from '../../assets/facebook.svg'



const Footer = () => (
    <ContainerFooter>
        <Logo src={logo}  alt='Efood'/>
        <ListLogos aria-label="Redes sociais">
  <li>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <img src={instagramLogo} alt="Instagram" />
    </a>
  </li>
  <li>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <img src={twitterLogo} alt="Twitter" />
    </a>
  </li>
  <li>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <img src={facebookLogo} alt="Facebook" />
    </a>
  </li>
</ListLogos>

        <TextFooter>
            A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
        </TextFooter>
    </ContainerFooter>
)

export default Footer