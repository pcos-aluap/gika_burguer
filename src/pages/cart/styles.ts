import styled from "styled-components"
import * as RadioGroup from "@radix-ui/react-radio-group"

export const Container = styled.form`
    display: grid;
    grid-template-areas: 
    "addressInformationContainer itensContainer"
    "paymentOptionsContainer checkContainer";
    grid-template-columns: 60% 1fr;

    padding-top: 10rem;
    margin-inline: 5rem;
`

export const SessionHeading = styled.h2`
    font-family: "Mukta Vaani", sans-serif;
    font-size: 1.5rem;
    color: ${({ theme }) => theme["base-title"]};

    margin-bottom: 1rem;
`

export const AddressInformationContainer = styled.div`
    grid-area: addressInformationContainer;
`

export const AddressForm = styled.div`
    width: 90%;
    display: grid;
    grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
    grid-template-columns: 200px 1fr;
    grid-gap: 16px 12px;
`

interface InputProps {
    gridArea: 'cep' | 'street' | 'number' | 'fullAddress' | 'neighborhood' | 'city' | 'state'
}

export const Input = styled.input<InputProps>`
    height: 3rem;
    grid-area: ${(props) => props.gridArea};
`

export const PaymentSection = styled.div`
    grid-area: paymentOptionsContainer;

    margin-top: 2rem;
`

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
    padding-block: 0.5rem;
    padding-left: 0.75rem;
    gap: 0.5rem;

    background: ${({theme}) => theme["base-card"]};

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
    grid-area: itensContainer;

    height: 20rem;
    overflow-y: scroll;
`

export const CheckoutContainer = styled.div`
    grid-area: checkContainer;
    margin-top: 2rem;

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

    padding: 0.3rem 1rem;

    font-family: "Mukta Vaani", sans-serif;
    color: ${(props) => props.theme.white};
    font-weight: 500;
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