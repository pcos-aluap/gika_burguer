import styled from "styled-components"
import { PersonalInformationComponent } from "../components/personal-container"
import { AddressInformationComponent } from "../components/address-container"
import { PaymentInformationComponent } from "../components/payment-container"
import { useFormContext } from "react-hook-form"
import { NewOrderFormInputs } from "../cart-form"
import { useEffect, useState } from "react"
import { PrimaryButton } from "../../../components/primary-button"

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
            <PaymentInformationComponent shouldShowChangeContainer={shouldShowChangeContainer} />
            <PrimaryButton type='submit' form="order" >Concluir compra</PrimaryButton>
        </Container>
    )

}

const Container = styled.div`
    height: auto;
    width: auto;

    margin: 1rem;
    margin-bottom: 3rem;
`