import styled from "styled-components"
import * as RadioGroup from "@radix-ui/react-radio-group"

export const Container = styled.form`
    display: flex;

    width: auto;
    height: auto;

    justify-content: space-around;
    align-items: center;
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

interface ChangeContainerProps {
    shouldBeShown: boolean
}

export const ChangeContainer = styled.div<ChangeContainerProps>`
    display: ${({shouldBeShown}) => shouldBeShown ? 'flex' : 'none'};
    flex-direction: column;

    width: 100%;
    height: 200px;

    margin-top: -55px;
    padding-top: 75px;

    padding-left: 3rem;

    gap: 0.25rem;

    background-color: ${({theme}) => theme["base-lighter-card"]};

    p {
        font-size: 1rem;
        color: ${({ theme }) => theme["base-subtitle"]};
    }

    div {
        display: flex;
    }
    
    label {
        display: inline-block;
        margin-left: 0.5rem;
    }

    input {
        width: 10rem;
        margin-left: 2rem;
    }
`

export const RadioItemHasChange = styled(RadioGroup.Item)`
	background-color: transparent;
	width: 1rem;
	height: 1rem;
	border-radius: 100%;
	box-shadow: 0 2px 10px var(--black-a7);

    margin-left: 2rem;
`

export const RadioIndicator = styled(RadioGroup.Indicator)`
 	display: flex;
 	align-items: center;
 	justify-content: center;
 	width: 100%;
 	height: 100%;
 	position: relative;

     &[data-state='checked']::after{
        content: "";
        display: block;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: ${({theme}) => theme["cordovan-500"]};

        z-index: 10;
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