import { useCart } from "../../hooks/useCart"
import { CartItemCard } from "../../components/cart-item-card"
import { Bank, CreditCard, Money, PixLogo } from "@phosphor-icons/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    AddressForm,
    AddressInformationContainer,
    CheckoutButton,
    CheckoutContainer,
    Container,
    Input,
    ItemsContainer,
    PaymentOptionsContainer,
    PaymentOptionsRadio,
    PaymentSection,
    SessionHeading
}
    from "./styles"
import { getAddressByCEP } from "../../api/utils/search-cep"


interface FormInputs {
    cep: number
    street: string
    number: string
    fullAdreess: string
    neighborhood: string
    city: string
    paymentMethod: 'credit' | 'debit' | 'pix' | 'cash'
    change: number
}

const newOrder = z.object({
    cep: z.number({ invalid_type_error: 'Informe o CEP' }),
    street: z.string().min(3, 'Informe a rua'),
    number: z.string().min(1, 'Informe o número'),
    fullAddress: z.string(),
    neighborhood: z.string().min(3, 'Informe o bairro'),
    city: z.string().min(3, 'Informe a cidade'),
    paymentMethod: z.enum(['credit', 'debit', 'pix', 'cash'], {
        invalid_type_error: 'Informe um método de pagamento',
    }),
    change: z.number(),
})

export type OrderInfo = z.infer<typeof newOrder>

export function Cart() {
    const { cartState } = useCart()

    const totalItemsPrice = cartState.reduce((previousValue, currentItem) => {
        return (previousValue += currentItem.menuItem.cost * currentItem.quantity)
    }, 0)
    const shippingFee = 3;

    const {
        register,
        setValue,
        setFocus,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<FormInputs>({
        resolver: zodResolver(newOrder),
    })

    console.log(cartState)

    const handleFindAddress = (e: React.FocusEvent<HTMLInputElement>) => {
        const cep = e.target.value.replace(/\D/g, '')

        getAddressByCEP(cep).then((res) => {
            setValue('street', res.street)
            setValue('neighborhood', res.neighborhood)
            setValue('city', res.city)

            setFocus('number')
        })
    }

    const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
        
    }

    return (
        <Container id="order" onSubmit={() => { }}>
            <AddressInformationContainer>
                <SessionHeading>Endereço</SessionHeading>
                <AddressForm>
                    <Input
                        gridArea="cep"
                        placeholder="CEP"
                        {...register('cep')}
                        onBlur={handleFindAddress}
                    />
                    <Input
                        gridArea="street"
                        placeholder="Rua"
                        {...register('street')}
                    />
                    <Input
                        gridArea="number"
                        placeholder="Número"
                        {...register('number')}
                    />
                    <Input
                        gridArea="fullAddress"
                        placeholder="Complemento"
                        {...register('fullAdreess')}
                    />
                    <Input
                        gridArea="neighborhood"
                        placeholder="Bairro"
                        {...register('neighborhood')}
                    />
                    <Input
                        gridArea="city"
                        placeholder="Ponto de Referência"
                        {...register('city')}
                    />
                </AddressForm>
            </AddressInformationContainer>
            <PaymentSection>
                <SessionHeading>Selecione a forma de pagamento</SessionHeading>
                <PaymentOptionsContainer>

                    <PaymentOptionsRadio value="credito">
                        <CreditCard size={20} />
                        Cartão de Crédito
                    </PaymentOptionsRadio>
                    <PaymentOptionsRadio value="debito">
                        <Bank size={20} />
                        Cartão de débito
                    </PaymentOptionsRadio>
                    <PaymentOptionsRadio value="pix">
                        <PixLogo size={20} />
                        Pix
                    </PaymentOptionsRadio>
                    <PaymentOptionsRadio value="dinheiro">
                        <Money size={20} />
                        Dinheiro
                    </PaymentOptionsRadio>
                </PaymentOptionsContainer>
            </PaymentSection>
            <ItemsContainer>
                <SessionHeading>Itens da compra</SessionHeading>
                {
                    cartState.map((item) => (
                        <CartItemCard
                            key={item.menuItem.id}
                            name={item.menuItem.name}
                            image={item.menuItem.image}
                            price={item.menuItem.cost}
                            quantity={item.quantity}
                        />
                    ))
                }
            </ItemsContainer>
            <CheckoutContainer>
                <div>
                    <span>Total de itens</span>
                    <span>{new Intl.NumberFormat('pt-br', {
                        currency: 'BRL',
                        style: 'currency',
                    }).format(totalItemsPrice)}</span>
                </div>
                <div>
                    <span>Entrega</span>
                    <span>{new Intl.NumberFormat('pt-br', {
                        currency: 'BRL',
                        style: 'currency',
                    }).format(shippingFee)}</span>
                </div>
                <div>
                    <strong>Total</strong>
                    <strong>{new Intl.NumberFormat('pt-br', {
                        currency: 'BRL',
                        style: 'currency',
                    }).format(totalItemsPrice + shippingFee)}</strong>
                </div>
                <CheckoutButton>Concluir compra</CheckoutButton>
            </CheckoutContainer>
        </Container>
    )
}