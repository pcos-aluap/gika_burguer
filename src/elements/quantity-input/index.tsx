import { Minus, Plus } from "@phosphor-icons/react"
import styled from "styled-components"

interface QuantityInputProps {
    quantity: number
    incrementQuantity: () => void
    decrementQuantity: () => void
}

export function QuantityInput({ quantity, incrementQuantity, decrementQuantity }: QuantityInputProps) {
    function handleIncrementQuantity(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.stopPropagation()
        incrementQuantity()
    }

    function handleDecrementQuantity(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.stopPropagation()
        decrementQuantity()
    }

    return (
        <ContainerInput>
            <AlterQuantityButton data-testid='decrement-quanity-button' type="button" onClick={(e) => handleDecrementQuantity(e)}>
                <Minus size={14} weight="bold" />
            </AlterQuantityButton>
            <span>{quantity}</span>
            <AlterQuantityButton data-testid='increment-quanity-button' type="button" onClick={(e) => handleIncrementQuantity(e)}>
                <Plus size={14} weight="bold" />
            </AlterQuantityButton>
        </ContainerInput>
    )
}

const ContainerInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 2.25rem;

    padding: 0.5rem;

    border-radius: 4px;

    background: ${(props) => props.theme["base-card"]};

    font-size: 0.875rem;
    font-family: "Mukta Vaani", sans-serif;
    color: ${(props) => props.theme["base-text"]};
`

const AlterQuantityButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Mukta Vaani", sans-serif;
    color: ${(props) => props.theme["cordovan-500"]};
    font-weight: bolder;

    border: none;
    background: transparent;

    transition: 0.2s;

    &:focus {
        color: ${(props) => props.theme["cordovan-400"]};
    }
`