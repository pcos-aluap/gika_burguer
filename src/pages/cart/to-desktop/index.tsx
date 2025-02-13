import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Container } from "./styles"
import { useEffect, useState } from "react"
import { PersonalInformationComponent } from "../components/personal-container"
import { AddressInformationComponent } from "../components/address-container"
import { PaymentInformationComponent } from "../components/payment-container"
import { ItemsContainerComponent } from "../components/items-container"
import { CheckoutComponent } from "../components/checkout-container"

const newOrderFormSchema = z.object({
    name: z.string().min(3, 'Informe o seu nome'),
    phone: z.string().regex(/^\(\d{2}\)\s\d{5}-\d{4}$/, {
        message: "Informe um telefone para contato",
    }),
    cep: z.string().min(8, 'Informe o CEP'),
    street: z.string().min(3, 'Informe a rua'),
    number: z.string().min(1, 'Informe o número'),
    fullAddress: z.string().optional(),
    neighborhood: z.string().min(3, 'Informe o bairro'),
    landMark: z.string().min(3, 'Informe a cidade'),
    paymentMethod: z.enum(['credit', 'debit', 'pix', 'cash'], {
        invalid_type_error: 'Informe um método de pagamento',
    }),
    change: z.string().optional(),
})

export type NewOrderFormInputs = z.infer<typeof newOrderFormSchema>

export function Cart() {
    const formMethods = useForm<NewOrderFormInputs>({
        resolver: zodResolver(newOrderFormSchema),
    })
    
    const paymentMethod = formMethods.watch('paymentMethod')
    const [shouldShowChangeContainer, setShouldShowChangeContainer] = useState(false)

    function handleOrderCheckout(data: any) {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        console.log(data)
    }

    useEffect(() => {
        setShouldShowChangeContainer(paymentMethod === 'cash')
    }, [paymentMethod])

    return (
        <FormProvider {...formMethods}>
        <Container id="order" onSubmit={formMethods.handleSubmit(handleOrderCheckout)}>
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
        </FormProvider>
    )
}

