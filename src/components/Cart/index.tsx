import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/cart";
import { openDelivery } from "../../store/reducers/delivery";
import Button from "../Button";
import * as S from "./styles";
import { ParseToBrl, getTotalPrice } from "../../utils";

const Cart = () => {
  const dispatch = useDispatch();

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const handleCloseCart = () => {
    dispatch(close());
  };

  const handleOpenDelivery = () => {
    dispatch(openDelivery());
  };

  const handleRemoveItem = (id: number) => {
    dispatch(remove(id));

    // Se for o último item, fecha o carrinho após remover
    if (items.length === 1) {
      dispatch(close());
    }
  };

  return (
    <S.CartContainer className={isOpen ? "is-open" : ""}>
      <S.Overlay onClick={handleCloseCart} />

      <S.Sidebar>
        {items.length === 0 ? (
          <p style={{ padding: "16px" }}>Seu carrinho está vazio.</p>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{ParseToBrl(item.preco)}</span>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    type="button"
                    aria-label={`Remover ${item.nome} do carrinho`}
                  />
                </S.CartItem>
              ))}
            </ul>

            <S.Prices>
              <p>Valor total</p>
              <span>{ParseToBrl(getTotalPrice(items))}</span>
            </S.Prices>

            <Button
              onClick={handleOpenDelivery}
              type="product-link"
              title="Clique aqui para continuar com a entrega"
            >
              Continuar com a entrega
            </Button>
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  );
};

export default Cart;
