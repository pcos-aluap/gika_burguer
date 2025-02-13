import styled from "styled-components";
import { useCart } from "../../../../hooks/useCart";
import { InformationContainer } from "../../to-desktop/styles";
import { FormatToBRL } from "../../../../utils/price-formater";

export function CheckoutComponent() {
    const { cartState } = useCart()

    const cartIsEmpty = cartState.length <= 0
    const totalItemsPrice = cartState.reduce((previousValue, currentItem) => {
        return (previousValue += currentItem.menuItem.cost * currentItem.quantity)
    }, 0)
    const shippingFee = 3

    return (
        <CheckoutContainer>
            <div>
                <span>Total de itens</span>
                <span>{FormatToBRL(totalItemsPrice)}</span>
            </div>
            <div>
                <span>Entrega</span>
                <span>{FormatToBRL(shippingFee)}</span>
            </div>
            <div>
                <strong>Total</strong>
                <strong>{FormatToBRL(totalItemsPrice + shippingFee)}</strong>
            </div>
            <CheckoutButton type='submit' form="order" disabled={cartIsEmpty}>Concluir compra</CheckoutButton>
        </CheckoutContainer>
    )
}

const CheckoutContainer = styled(InformationContainer)`
    div {
        display: flex;
        flex-direction: row;

        justify-content: space-between;
    }
`

const CheckoutButton = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem 1rem;

    font-family: "Mukta Vaani", sans-serif;
    color: ${(props) => props.theme.white};
    font-weight: 600;
    text-transform: uppercase;

    border: none;
    border-radius: 4px;

    margin-top: 1rem;

    background: ${(props) => props.theme["cordovan-500"]};

    transition: 0.2s;

    &:focus {
        background: ${(props) => props.theme["cordovan-400"]};
    }
`