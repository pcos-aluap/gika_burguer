import { ShoppingCartSimple } from "@phosphor-icons/react";
import styled from "styled-components";

interface AddToCartButtonProps {
    addToCart: () => void;
}
export function CardsAddToCartButton({ addToCart }: AddToCartButtonProps){
    function handleAddToCart(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
        e.stopPropagation();
        addToCart();
    }
    return (
        <Container>
            <ShoppingCartSimple  data-testid='add-item-to-cart' onClick={(e) => handleAddToCart(e)}/>
        </Container>
    )
}

const Container = styled.button`
    display: flex;

    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme["cordovan-500"]};
    color: white;

    border: none;
    border-radius: 4px;
`;