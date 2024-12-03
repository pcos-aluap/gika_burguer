import styled from "styled-components"
import { QuantityInput } from "../../elements/quantity-input"
import { Trash } from "@phosphor-icons/react"
import aa from "../../assets/hamburguer.jpeg"
import { PriceFormater } from "../../utils/price-formater"
import { useState } from "react"

interface CartItemCardProps {
    name: string
    image: string
    price: number
    quantity: number
}

export function CartItemCard({ name, image, quantity, price }: CartItemCardProps) {
    const [quantityOfItems, setQuantityOfIems] = useState<number>(quantity)

    function incrementQuantityOfItems() {
        setQuantityOfIems(state => state += 1);
    }

    function decrementQuantityOfItems() {
        if (quantityOfItems > 1) {
            setQuantityOfIems(state => state -= 1);
        }
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
                    incrementQuantity={incrementQuantityOfItems} 
                    decrementQuantity={decrementQuantityOfItems} 
                />
                <RemoveButton type="button"><Trash size={24} /></RemoveButton>
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
`

const RowContainer = styled.div`
    grid-area: rowContainer;

    display: grid;
    grid-template-columns: 6rem 5rem 3rem;
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