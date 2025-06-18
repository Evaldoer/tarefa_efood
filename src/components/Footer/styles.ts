import styled from "styled-components";
import { cores } from "../../styles";

export const ContainerFooter = styled.section`
    background-color: ${cores.bege};
`

export const Logo = styled.img`
    display: block;
    margin: 0 auto;
    padding-top: 40px;
`

export const ListLogos = styled.ul`
    display: flex;
  gap: 16px; /* Espaço entre os ícones */
  list-style: none;
  justify-content: center;
  padding-top: 32px;

  li a img {
    width: 24px;
    height: 24px;
    transition: transform 0.2s;
  }

  li a img:hover {
    transform: scale(1.1);
  }
`

export const TextFooter = styled.p`
    color: ${cores.rose};
    font-size: 10px;
    width: 480px;
    text-align: center;
    display: block;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 40px;
`
