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

interface ChangeContainerProps {
    shouldBeShown: boolean
}

const ChangeContainer = styled.div<ChangeContainerProps>`
    display: ${({ shouldBeShown }) => shouldBeShown ? 'flex' : 'none'};
    flex-direction: column;

    width: 100%;
    height: 200px;

    margin-top: -55px;
    padding-top: 75px;

    padding-left: 3rem;

    gap: 0.25rem;

    background-color: ${({ theme }) => theme["base-lighter-card"]};

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

const RadioItemHasChange = styled(RadioGroup.Item)`
	background-color: transparent;
	width: 1rem;
	height: 1rem;
	border-radius: 100%;
	box-shadow: 0 2px 10px var(--black-a7);

    margin-left: 2rem;
`

const RadioIndicator = styled(RadioGroup.Indicator)`
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
        background-color: ${({ theme }) => theme["cordovan-500"]};
    }
`