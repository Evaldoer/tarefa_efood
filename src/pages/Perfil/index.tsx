import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import FoodList from "../../components/FoodList"
import Footer from "../../components/Footer"
import HeaderBanner from "../../components/HeaderBanner"

import type { CardapioItem, Restaurants } from '../../pages/Home'

const Perfil = () => {
        const [restaurante, setRestaurante] = useState<Restaurants | null>(null)
        const { id } = useParams()

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then(resposta => resposta.json())
            .then(resposta => {
                const cardapioCorrigido: CardapioItem[] = resposta.cardapio.map((item: any) => ({
                    ...item,
                    preco: Number(item.preco)
                }))
                setRestaurante({
                    ...resposta,
                    cardapio: cardapioCorrigido
                } as Restaurants)
            })
        }, [id])

    return(
        <>
        {restaurante && (
            <HeaderBanner 
                tipo={restaurante.tipo!}
                titulo={restaurante.titulo!}
                capa={restaurante.capa!}
            />
        )}
            <FoodList foods={restaurante?.cardapio ?? []} />
            <Footer />
        </>
    )
}


export default Perfil