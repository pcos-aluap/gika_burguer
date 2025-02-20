import { Container } from "./styles"
import { useEffect, useState } from "react"
import { PersonalInformationComponent } from "../components/personal-container"
import { AddressInformationComponent } from "../components/address-container"
import { CheckoutComponent } from "../components/checkout-container"
import { ItemsContainerComponent } from "../components/items-container"
import { PaymentInformationComponent } from "../components/payment-container"
import { NewOrderFormInputs } from "../cart-form"
import { useFormContext } from "react-hook-form"

export function Cart() {
    const { watch, handleSubmit } = useFormContext<NewOrderFormInputs>()

    const paymentMethod = watch('paymentMethod')
    const [shouldShowChangeContainer, setShouldShowChangeContainer] = useState(false)

    function handleOrderCheckout(data: any) {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        console.log(data)
    }

    useEffect(() => {
        setShouldShowChangeContainer(paymentMethod === 'cash')
    }, [paymentMethod])

    return (
        <Container id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
            <div>
                <PersonalInformationComponent />
                <AddressInformationComponent />
                <PaymentInformationComponent
                    shouldShowChangeContainer={shouldShowChangeContainer}                   
                />
            </div>
            <div>
                <ItemsContainerComponent />
                <CheckoutComponent />
            </div>
        </Container>
    )
}

