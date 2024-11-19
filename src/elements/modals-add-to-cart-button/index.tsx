import styled from "styled-components"
import { PriceFormater } from "../../utils/price-formater"

interface ModalsAddButtonToCartButtonProps {
    value: number
    availability: boolean
    onClick: () => void
}

export function ModalsAddButtonToCartButton({ value, availability, onClick }: ModalsAddButtonToCartButtonProps) {
    return (
        <Container type="button" onClick={onClick} availabiliy={availability} disabled={!availability}>
            Adicionar <span>R$ {PriceFormater(value)}</span>
        </Container>
    )
}

interface ButtonProps {
    availabiliy: boolean
}

const Container = styled.button<ButtonProps>`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0.3rem 1rem;

    font-family: "Mukta Vaani", sans-serif;
    color: ${(props) => props.theme.white};
    font-weight: 500;

    border: none;
    border-radius: 4px;

    background: ${(props) => props.availabiliy ? props.theme["cordovan-500"] : 'gray'};

    transition: 0.2s;

    span {
        margin-left: 0.5rem;
    }

    &:focus {
        background: ${(props) => props.theme["cordovan-400"]};
    }
`