import { CheckFat, ShoppingCartSimple } from "@phosphor-icons/react";
import styled from "styled-components";

interface AddToCartButtonProps {
    addToCart: () => void
    hasBeenClicked: boolean
}
export function CardsAddToCartButton({ addToCart, hasBeenClicked }: AddToCartButtonProps) {
    function handleAddToCart(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.stopPropagation();
        addToCart();
    }
    return (
        <Container type="button" disabled={hasBeenClicked} data-testid='add-item-to-cart' onClick={handleAddToCart}>
            {
                hasBeenClicked ?
                    <CheckFat weight="fill" data-testid='check-fat-icon' /> :
                    <ShoppingCartSimple data-testid='shopping-cart-icon' />
            }
        </Container>
    )
}

const Container = styled.button`
    display: flex;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme["cordovan-500"]};
    color: white;

    border: none;
    border-radius: 4px;

    &:disabled{
        background-color: ${({ theme }) => theme.success};
    }
`;