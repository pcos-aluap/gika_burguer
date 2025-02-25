import styled from "styled-components"
import { QuantityInput } from "../../elements/quantity-input"
import { Trash } from "@phosphor-icons/react"
import aa from "../../assets/hamburguer.jpeg"
import { PriceFormater } from "../../utils/price-formater"
import { useState } from "react"
import { useCart } from "../../hooks/useCart"

interface CartItemCardProps {
    id: number
    name: string
    image: string
    price: number
    quantity: number
}

export function CartItemCard({ id, name, image, quantity, price }: CartItemCardProps) {
    const { incrementItemsQuantity, decrementItemsQuantity, removeItem } = useCart()
    const [quantityOfItems, setQuantityOfIems] = useState<number>(quantity)

    function handleIncrementQuantityOfItems() {
        setQuantityOfIems(state => state += 1)
        incrementItemsQuantity(id)
    }

    function handleDecrementQuantityOfItems() {
        if (quantityOfItems > 1) {
            setQuantityOfIems(state => state -= 1);
            decrementItemsQuantity(id)
        }
    }

    function handleRemoveItemFromCart() {
        removeItem(id)
    }

    return (
        <Container>
            <img src={aa} />
            <Name>{name}</Name>
            <RowContainer>
                <Price>
                    R$ <span>{PriceFormater(price)}</span>
                </Price>
                <QuantityInput 
                    quantity={quantityOfItems} 
                    incrementQuantity={handleIncrementQuantityOfItems} 
                    decrementQuantity={handleDecrementQuantityOfItems} 
                />
                <RemoveButton type="button" onClick={handleRemoveItemFromCart}><Trash size={24} /></RemoveButton>
            </RowContainer>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-areas: 
    "name image"
    "rowContainer image";

    grid-template-columns: 1fr 5rem;
    column-gap: 1rem;
    row-gap: 0.25rem;

    padding: 0.5rem;

    border-radius: 4px;

    background: white;

    img {
        grid-area: image;
        width: 5rem;
        height: 5rem;

        object-fit: cover;

        border-radius: 4px;
    }

    @media (width < 768px) {
        width: 100%;

        grid-template-columns: 1fr 3rem;

        img {
            width: 3.5rem;
            height: 3.5rem;
        }
    }
`

const Name = styled.h3`
    display: inline-block;
    
    grid-area: name;

    font-family: "Mukta Vaani", sans-serif;
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: bolder;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    @media (width < 768px) {
        font-size: 1rem;
    }
`

const RowContainer = styled.div`
    grid-area: rowContainer;

    display: grid;
    grid-template-columns: 6rem 5rem 3rem;

    @media (width < 768px) {
        grid-template-columns: 5rem 4rem 2rem;
    }
`

const Price = styled.p`
    display: inline-block;

    font-family: "Mukta Vaani", sans-serif;
    font-size: 0.75rem;
    color: ${(props) => props.theme["base-text"]};

    margin-top: 0.25rem;

    span {
        font-size: 1.2rem;
        color: ${(props) => props.theme["cordovan-500"]};
        font-weight: bolder;
    }

    @media (width < 768px) {
        font-size: 0.5rem;

        span {
            font-size: 0.75rem;
        }
    }
`

const RemoveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.5rem;
    height: 2.2rem;

    color: ${(props) => props.theme["cordovan-500"]};
    font-weight: bolder;

    border: none;
    border-radius: 4px;

    margin-left: 0.5rem;

    transition: 0.2s;

    &:focus {
        color: ${(props) => props.theme["cordovan-400"]};
    }
`