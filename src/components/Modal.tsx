import type { CardapioItem } from '../types'
import styled from 'styled-components'

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalBox = styled.div`
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
  max-width: 480px;
  width: 100%;
`

type Props = {
  item: CardapioItem
  onClose: () => void
}

const Modal = ({ item, onClose }: Props) => {
  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <h2>{item.nome}</h2>
        <img src={item.foto} alt={item.nome} style={{ width: '100%' }} />
        <p>{item.descricao}</p>
        <p>Porção: {item.porcao}</p>
        <p>Preço: R$ {item.preco.toFixed(2)}</p>
        <button onClick={onClose}>Fechar</button>
      </ModalBox>
    </Overlay>
  )
}

export default Modal
