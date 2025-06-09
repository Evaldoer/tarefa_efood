import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerRest = styled.div`
  width: 472px;
  border: 1px solid ${cores.rose};
  background-color: ${cores.branca};
  color: ${cores.rose};
  margin-bottom: 48px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`

export const Imagem = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Infos = styled.div`
  display: flex;
  position: absolute;
  text-align: center;
  top: 16px;
  right: 16px;
  gap: 8px;
  flex-wrap: wrap;
`

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  margin-top: 8px;
  margin-bottom: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rose};
`

export const Nota = styled.span`
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;

  img {
    width: 15px;
    height: 15px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  max-width: 370px;
  margin: 0 8px 16px;
`
