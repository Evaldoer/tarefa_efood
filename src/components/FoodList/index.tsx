import { useState } from 'react'
import type { CardapioItem } from '../../pages/Home'

import { List } from './styles'
import { Container } from "../../styles"
import { ModalContent, Modal, ModalButton, Description, BotaoFechar, ImageModal, Title } from './styles'

import Food from '../Food'

import Fechar from '../../assets/fechar.png'

type Props = {
    foods: CardapioItem[]
}

export const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(preco)
}
const FoodList = ({ foods } : Props) => {
    const [pratoSelecionado, setPratoSelecionado] = useState<CardapioItem | null>(null)

    
    return (
        <Container>
            <List>
                {foods.map(item => (
                    <Food 
                        key={item.id}
                        onClick={() => setPratoSelecionado(item)}
                        foto={item.foto} 
                        nome={`${item.nome}`} 
                        descricao={`${item.descricao}`} 
                        preco={item.preco}
                        porcao={`${item.porcao}`}                
                    />
                ))}
            </List>

            <Modal className={pratoSelecionado ? 'visivel' : ''}>
                {pratoSelecionado && (
                <ModalContent>
                    <BotaoFechar 
                        src={Fechar} 
                        onClick={() => setPratoSelecionado(null)}
                />
                    <ImageModal src={pratoSelecionado.foto} alt={pratoSelecionado.nome} />
                    <div>
                        <Title>{pratoSelecionado.nome}</Title>
                        <Description>
                            {pratoSelecionado.descricao}
                        <span>
                            {pratoSelecionado.porcao}
                        </span>
                        </Description>
                        <ModalButton>Adicionar ao carrinho - R$ {formataPreco(pratoSelecionado.preco)}</ModalButton>
                    </div>
                </ModalContent>         
                )}
                <div className='overlay'></div>
            </Modal>
        </Container>
    )
}

export default FoodList