import { Controller, useFormContext } from "react-hook-form"
import { NewOrderFormInputs } from "../../cart-form"
import { Bank, CreditCard, Money, PixLogo } from "@phosphor-icons/react"
import * as RadioGroup from "@radix-ui/react-radio-group"
import { InputError } from "../error"
import styled from "styled-components"
import { InformationContainer } from "../../to-desktop/styles"
import { ChangeModalForMobile } from "../change-modal-for-mobile"

interface PaymentInformationComponentProps {
    shouldShowChangeContainer: boolean
}

export function PaymentInformationComponent({ shouldShowChangeContainer }: PaymentInformationComponentProps) {
    const { control, register, formState: { errors } } = useFormContext<NewOrderFormInputs>()

    return (
        <>
            <ChangeModalForMobile shouldShowModal={shouldShowChangeContainer} />
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
                    <InputError errorMessage={errors.paymentMethod.message!} />
                }
            </InformationContainer>
        </>
    )
}

const PaymentOptionsContainer = styled(RadioGroup.Root)`
    display: flex;
    width: 45rem;
    justify-content: space-around;

    @media (width < 768px) {
        flex-direction: column;
        align-items: center;
        width: auto;

        gap: 0.5rem;

        margin: auto;
    }
`

const PaymentOptionsRadio = styled(RadioGroup.Item)`
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