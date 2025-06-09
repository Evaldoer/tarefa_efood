import styled from "styled-components";
import { cores } from "../../styles";

export const Imagem = styled.div`
    width: 100%;
    height: 186px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Text = styled.h3`
    font-size: 18px;
    font-weight: 900;
    color: ${cores.rose};
`

export const Banner = styled.div`
    width: 100%;
    height: 280px;
    color: ${cores.branca};
    background-repeat: no-repeat;
    background-size: cover;
`

export const TextBanner = styled.p`
    padding-top: 25px;
    font-size: 32px;
    font-weight: 100;
    padding-bottom: 152px;
`

export const RestaurantName = styled.p`
    font-size: 32px;
    font-weight: 900;
    width: 672px;
`