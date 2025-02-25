import { CartItemCard } from "../../../../components/cart-item-card"
import { useCart } from "../../../../hooks/useCart"
import styled from "styled-components"
import { InformationContainer } from "../../to-desktop/styles"

export function ItemsContainerComponent() {
    const { cartState } = useCart()

    //TODO: change the scroll style
    return (
        <InformationContainer>
            <h2>Itens da compra</h2>
            <ItemsContainer>
                {
                    cartState.map((item) => (
                        <CartItemCard
                            id={item.menuItem.id} 
                            key={item.menuItem.id}
                            name={item.menuItem.name}
                            image={item.menuItem.image}
                            price={item.menuItem.cost}
                            quantity={item.quantity}
                        />
                    ))
                }
            </ItemsContainer>
        </InformationContainer>
    )
}

const ItemsContainer = styled.section`
    height: 20rem;
    overflow-y: scroll;
`