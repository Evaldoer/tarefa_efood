import styled from 'styled-components'
import { cores } from '../styles'
import type { CardapioItem } from '../types'
import React from 'react'

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

const ModalBox = styled.div`
  background-color: ${cores.branca};
  padding: 24px;
  border-radius: 8px;
  max-width: 480px;
  width: 100%;
  position: relative;
  color: ${cores.rose};
`

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  background: none;
  border: none;
  font-size: 28px;
  color: ${cores.rose};
  cursor: pointer;
`

const Image = styled.img`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 16px;
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`

const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 8px;
`

const Portion = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
`

const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
`

type Props = {
  item: CardapioItem
  onClose: () => void
}

const Modal = ({ item, onClose }: Props) => {
  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Image src={item.foto} alt={item.nome} />
        <Title>{item.nome}</Title>
        <Description>{item.descricao}</Description>
        <Portion>Porção: {item.porcao}</Portion>
        <Price>R$ {item.preco.toFixed(2)}</Price>
      </ModalBox>
    </Overlay>
  )
}

export default Modal
