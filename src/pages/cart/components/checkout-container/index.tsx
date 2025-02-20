import styled from "styled-components";
import { useCart } from "../../../../hooks/useCart";
import { InformationContainer } from "../../to-desktop/styles";
import { FormatToBRL } from "../../../../utils/price-formater";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../../../components/primary-button";

export function CheckoutComponent() {
    const { totalItemsPrice, cartState } = useCart()

    const cartIsEmpty = cartState.length <= 0
    const shippingFee = 3

    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

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
            {
                isMobile ?
                <ContinueOrder to={'/cart/order-info'}>Continuar Compra</ContinueOrder> :
                <PrimaryButton type='submit' form="order" disabled={cartIsEmpty}>Concluir compra</PrimaryButton>
            }
            
        </CheckoutContainer>
    )
}

const CheckoutContainer = styled(InformationContainer)`
    margin-top: 3rem;
    div {
        display: flex;
        flex-direction: row;

        justify-content: space-between;
    }
`

const ContinueOrder = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem 1rem;

    font-family: "Mukta Vaani", sans-serif;
    color: ${(props) => props.theme.white};
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;

    border: none;
    border-radius: 4px;

    margin-top: 2rem;

    background: ${(props) => props.theme["cordovan-500"]};

    transition: 0.2s;

    &:focus {
        background: ${(props) => props.theme["cordovan-400"]};
    }
`