import { useCart } from "../../hooks/useCart"
import { CartItemCard } from "../../components/cart-item-card"
import { Bank, CreditCard, Money, PixLogo } from "@phosphor-icons/react"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    AddressForm,
    CheckoutButton,
    CheckoutContainer,
    Container,
    Error,
    InformationContainer,
    Input,
    InputContainer,
    ItemsContainer,
    PaymentOptionsContainer,
    PaymentOptionsRadio,
}
    from "./styles"
import { getAddressByCEP } from "../../api/utils/search-cep"

const cepValidationRegex = new RegExp(`\d{5}-\d{3}`)

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
    change: z.number().optional(),
})

export type newOrderFormInputs = z.infer<typeof newOrderFormSchema>

export function Cart() {
    const { cartState } = useCart()

    const totalItemsPrice = cartState.reduce((previousValue, currentItem) => {
        return (previousValue += currentItem.menuItem.cost * currentItem.quantity)
    }, 0)
    const shippingFee = 3;

    const cartIsEmpty = cartState.length <= 0

    const {
        register,
        setValue,
        setFocus,
        handleSubmit,
        control,
        setError,
        formState: { errors }
    } = useForm<newOrderFormInputs>({
        resolver: zodResolver(newOrderFormSchema),
    })

    const handleFindAddress = (e: React.FocusEvent<HTMLInputElement>) => {
        const cep = e.target.value

        getAddressByCEP(cep).then((res) => {
            setValue('street', res.street)
            setValue('neighborhood', res.neighborhood)

            setFocus('number')
        }).catch(() => {
            setError('cep', {
                message: 'CEP inválido'
            })
        })
    }

    const handleformatPhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        const cleaned = event.target.value.replace(/\D/g, '');

        if (cleaned.length <= 2) {
            setValue('phone', `(${cleaned}`)
        }
        if (cleaned.length <= 6) {
            setValue('phone', `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`)
        }
        setValue('phone', `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`)
    }


    function handleOrderCheckout(data: any) {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        console.log(data)
    }

    return (
        <Container id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
            <div>
                <InformationContainer>
                    <h2>Dados Pessoais</h2>
                    <InputContainer>
                        <Input
                            placeholder="Nome"
                            {...register('name')}
                        />
                        {
                            errors.name &&
                            <Error>{errors.name?.message}</Error>
                        }
                    </InputContainer>
                    <InputContainer>
                        <Input
                            placeholder="Telefone"
                            {...register('phone')}
                            onChange={handleformatPhoneNumber}
                        />
                        {
                            errors.phone &&
                            <Error>{errors.phone?.message}</Error>
                        }
                    </InputContainer>
                </InformationContainer>
                <InformationContainer>
                    <h2>Endereço</h2>
                    <AddressForm>
                        <InputContainer gridArea="cep">
                            <Input
                                placeholder="CEP"
                                {...register('cep', {
                                    pattern: {
                                        value: cepValidationRegex,
                                        message: 'Formato inválido'
                                    }
                                })}
                                onBlur={handleFindAddress}
                            />
                            {
                                errors.cep &&
                                <Error>{errors.cep?.message}</Error>
                            }
                        </InputContainer>
                        <InputContainer gridArea="street">
                            <Input
                                placeholder="Rua"
                                {...register('street')}
                            />
                            {
                                errors.street &&
                                <Error>{errors.street?.message}</Error>
                            }
                        </InputContainer>
                        <InputContainer gridArea="number">
                            <Input
                                placeholder="Número"
                                {...register('number')}
                            />
                            {
                                errors.number &&
                                <Error>{errors.number?.message}</Error>
                            }
                        </InputContainer>
                        <InputContainer gridArea="fullAddress">
                            <Input
                                placeholder="Complemento"
                                {...register('fullAddress')}
                            />
                            {
                                errors.fullAddress &&
                                <Error>{errors.fullAddress?.message}</Error>
                            }
                        </InputContainer>
                        <InputContainer gridArea="neighborhood">
                            <Input
                                placeholder="Bairro"
                                {...register('neighborhood')}
                            />
                            {
                                errors.neighborhood &&
                                <Error>{errors.neighborhood?.message}</Error>
                            }
                        </InputContainer>
                        <InputContainer gridArea="landMark">
                            <Input
                                placeholder="Ponto de Referência"
                                {...register('landMark')}
                            />
                            {
                                errors.landMark &&
                                <Error>{errors.landMark?.message}</Error>
                            }
                        </InputContainer>
                    </AddressForm>
                </InformationContainer>
                <InformationContainer>
                    <h2>Selecione a forma de pagamento</h2>
                    <Controller
                        control={control}
                        name="paymentMethod"
                        render={({ field }) => {
                            return (
                                <PaymentOptionsContainer
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <PaymentOptionsRadio
                                        value="credit"
                                        {...register('paymentMethod')}
                                    >
                                        <CreditCard size={20} />
                                        Cartão de Crédito
                                    </PaymentOptionsRadio>
                                    <PaymentOptionsRadio
                                        value="debit"
                                        {...register('paymentMethod')}
                                    >
                                        <Bank size={20} />
                                        Cartão de débito
                                    </PaymentOptionsRadio>
                                    <PaymentOptionsRadio
                                        value="pix"
                                        {...register('paymentMethod')}
                                    >
                                        <PixLogo size={20} />
                                        Pix
                                    </PaymentOptionsRadio>
                                    <PaymentOptionsRadio
                                        value="cash"
                                        {...register('paymentMethod')}
                                    >
                                        <Money size={20} />
                                        Dinheiro
                                    </PaymentOptionsRadio>
                                </PaymentOptionsContainer>
                            )
                        }}
                    />
                    {
                        errors.paymentMethod &&
                        <Error>{errors.paymentMethod?.message}</Error>
                    }
                </InformationContainer>
            </div>
            <div>
                <ItemsContainer>
                    <h2>Itens da compra</h2>
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
                    <CheckoutButton type='submit' form="order" disabled={cartIsEmpty}>Concluir compra</CheckoutButton>
                </CheckoutContainer>
            </div>
        </Container>
    )
}