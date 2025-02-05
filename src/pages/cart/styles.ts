import styled from "styled-components"
import * as RadioGroup from "@radix-ui/react-radio-group"

export const Container = styled.form`
    display: flex;

    width: auto;
    height: auto;

    justify-content: space-around;
    align-items: center;

    background-color: aliceblue;
`

export const InformationContainer = styled.section`
   margin-top: 1rem;

   h2 {
    font-family: "Mukta Vaani", sans-serif;
    font-size: 1.5rem;
    color: ${({ theme }) => theme["base-title"]};

    margin-bottom: 0.75rem;
   }
`

export const AddressForm = styled.div`
    width: 90%;
    display: grid;
    grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood landMark state';
    grid-template-columns: 200px 1fr;
`

interface InputProps {
    gridArea?: 'cep' | 'street' | 'number' | 'fullAddress' | 'neighborhood' | 'landMark' | 'state'
}

export const InputContainer = styled.div<InputProps>`
    grid-area: ${({ gridArea }) => gridArea ? gridArea : 'none'};
    display: flex;
    flex-direction: column;

    margin-block: 0.25rem;
    margin-right: 0.5rem;
`

export const Input = styled.input`
    height: 3rem;

    padding-left: 0.25rem;
`

export const Error = styled.span`
    color: ${({ theme }) => theme.error};
    font-size: 0.75rem;
`;

export const PaymentOptionsContainer = styled(RadioGroup.Root)`
    display: flex;
    width: 45rem;
    justify-content: space-around;
`

export const PaymentOptionsRadio = styled(RadioGroup.Item)`
    display: flex;
    height: min-content;
    width: 10rem;
    align-items: center;
    padding-block: 0.75rem;
    padding-left: 0.75rem;
    gap: 0.5rem;

    background: ${({ theme }) => theme["base-card"]};

    font-size: 0.875rem;

    border: none;
    border-radius: 4px;

    svg {
        color: ${({ theme }) => theme["cordovan-500"]};
    }

    &[data-state='checked'] {
        border: 2px solid ${({ theme }) => theme["cordovan-500"]};
    }
`

export const ItemsContainer = styled.div`
    height: 20rem;
    overflow-y: scroll;
`

export const CheckoutContainer = styled(InformationContainer)`
    div {
        display: flex;
        flex-direction: row;

        justify-content: space-between;
    }
`

export const CheckoutButton = styled.button`
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