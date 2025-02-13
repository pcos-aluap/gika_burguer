import styled from "styled-components";
import { ItemsContainerComponent } from "../components/items-container";
import { CheckoutComponent } from "../components/checkout-container";

export function CartItemsPage() {
    return (
        <Container>
            <ItemsContainerComponent />
            <CheckoutComponent />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding-inline: 2rem;

    gap: 2rem;
`