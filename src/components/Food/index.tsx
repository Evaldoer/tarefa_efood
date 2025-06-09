import { ContainerFood, ImagemFood, TitleFood, DescriptionFood } from './styles'
import { Botao } from '../Button/styles'
import { formataPreco } from '../FoodList';

type FoodProps = {
    onClick: () => void;
    foto: string
    nome: string
    descricao: string
    preco: number
    porcao: string
};

const Food = ({ onClick, foto, descricao, nome, preco }: FoodProps) => {
    const limitarDescricao = (descricao: string) => {
        return descricao.length > 150 ? descricao.slice(0, 150) + '...' : descricao
    }
    
    return (
    <ContainerFood>
        <ImagemFood src={foto} />
        <div onClick={onClick}>
            <TitleFood>{nome}</TitleFood>
            <DescriptionFood>{limitarDescricao(descricao)}</DescriptionFood>
            <Botao>Adicionar ao carrinho - R$ {formataPreco(preco)}</Botao>
        </div>
    </ContainerFood>
    )
}


export default Food