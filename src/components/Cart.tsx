import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { remove, clear } from "../store/reducers/cart";
import type { CardapioItem } from "../types";

const Overlay = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
  z-index: 1000;
`;

const CartContainer = styled.div`
  background: white;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 320px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const List = styled.ul`
  flex-grow: 1;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
`;

const ItemInfo = styled.div`
  flex-grow: 1;
`;

const ItemName = styled.p`
  font-weight: bold;
  margin: 0 0 0.25rem 0;
`;

const ItemPrice = styled.p`
  margin: 0;
  color: #666;
`;

const RemoveButton = styled.button`
  background: #e66767;
  border: none;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  align-self: center;
`;

const EmptyMessage = styled.p`
  text-align: center;
  margin-top: 2rem;
  color: #666;
`;

const Footer = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 1rem;
  margin-top: auto;
  margin-bottom: 80px; // 🔼 sobe o total e botão um pouco acima do rodapé
  background-color: #fff;
`


const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ClearButton = styled.button`
  background: #e66767;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;

const CartToggleButton = styled.button<{ visible?: boolean }>`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #e66767;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1100;
  display: ${({ visible }) => (visible === false ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
`


const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((acc, item) => acc + item.preco, 0);

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  const handleClear = () => {
    dispatch(clear());
  };

  return (
    <>
      {!isOpen && (
  <CartToggleButton visible={!isOpen} onClick={() => setIsOpen(true)}>
    🛒
    {items.length > 0 && ` (${items.length})`}
  </CartToggleButton>
)}


      <Overlay visible={isOpen} onClick={() => setIsOpen(false)}>
        <CartContainer onClick={(e) => e.stopPropagation()}>
          <Header>
            <Title>Carrinho</Title>
            <CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>
          </Header>

          {items.length === 0 ? (
            <EmptyMessage>Seu carrinho está vazio.</EmptyMessage>
          ) : (
            <>
              <List>
                {items.map((item: CardapioItem) => (
                  <Item key={item.id}>
                    <ItemInfo>
                      <ItemName>{item.nome}</ItemName>
                      <ItemPrice>R$ {item.preco.toFixed(2)}</ItemPrice>
                    </ItemInfo>
                    <RemoveButton onClick={() => handleRemove(item.id)}>
                      Remover
                    </RemoveButton>
                  </Item>
                ))}
              </List>

              <Footer>
                <Total>
                  <span>Total:</span>
                  <span>R$ {total.toFixed(2)}</span>
                </Total>
                <ClearButton onClick={handleClear}>Limpar Carrinho</ClearButton>
              </Footer>
            </>
          )}
        </CartContainer>
      </Overlay>
    </>
  );
};

export default Cart;
