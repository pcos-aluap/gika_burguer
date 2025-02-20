import styled from "styled-components"
import { PersonalInformationComponent } from "../components/personal-container"
import { AddressInformationComponent } from "../components/address-container"
import { PaymentInformationComponent } from "../components/payment-container"
import { useFormContext } from "react-hook-form"
import { NewOrderFormInputs } from "../cart-form"
import { useEffect, useState } from "react"

export function OrderInfoPage() {
    const { watch } = useFormContext<NewOrderFormInputs>()
    const paymentMethod = watch('paymentMethod')
    const [shouldShowChangeContainer, setShouldShowChangeContainer] = useState(false)

    useEffect(() => {
        setShouldShowChangeContainer(paymentMethod === 'cash')
    }, [paymentMethod])

    return (
        <Container>
            <PersonalInformationComponent />
            <AddressInformationComponent />
            <PaymentInformationComponent shouldShowChangeContainer={shouldShowChangeContainer} orderTotal={20} />
            <CheckoutButton type='submit' form="order" >Concluir compra</CheckoutButton>
        </Container>
    )

}

const Container = styled.div`
    height: auto;
    width: auto;

    margin: 1rem;
    margin-bottom: 3rem;
`

const CheckoutButton = styled.button`
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