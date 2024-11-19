import styled from "styled-components";

interface QuantityInputProps {
    availability: boolean
    showForm: () => void
}

export function ShowAddToCartFormButton({ availability, showForm }: QuantityInputProps) {
    function handleShowForm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.stopPropagation()
        showForm()
    }

    return (
        <AddItemToCartButon type="button" available={availability} disabled={!availability} onClick={handleShowForm}>
            adicionar ao carrinho
        </AddItemToCartButon>
    )
}

interface AvailabilityProps {
    available: boolean
}

const AddItemToCartButon = styled.button<AvailabilityProps>`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem 2rem;

    font-family: "Mukta Vaani", sans-serif;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    font-weight: bold;

    border: none;
    border-radius: 4px;

    background: ${(props) => props.available ? props.theme["cordovan-500"] : 'gray'};

    transition: 0.2s;

    &:focus {
        background: ${(props) => props.theme["cordovan-400"]};
    }
`