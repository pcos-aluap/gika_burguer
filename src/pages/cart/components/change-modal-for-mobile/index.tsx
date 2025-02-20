import styled from "styled-components"
import { CartInput } from "../input"
import { PriceFormater } from "../../../../utils/price-formater"
import { useFormContext } from "react-hook-form"
import { NewOrderFormInputs } from "../../cart-form"
import { SecondaryButton } from "../../../../components/secondary-button"
import { PrimaryButton } from "../../../../components/primary-button"
import { useEffect, useState } from "react"

interface ChangeModalForMobileProps {
    shouldShowModal: boolean
    orderTotal: number
}

export function ChangeModalForMobile({ shouldShowModal, orderTotal }: ChangeModalForMobileProps) {
    const { setValue, watch } = useFormContext<NewOrderFormInputs>()

    const [hasChange, setHasChange] = useState(false)
    const change = watch('change')

    const handleFormatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const changeToBeFormated = event.target.value.replace(/\D/g, '')

        const formatedValue = PriceFormater(parseFloat(changeToBeFormated) / 100)
        setValue('change', formatedValue)

        console.log(change)
    }

    useEffect(() => {

        if(change != '0,00'){
            console.log(change)
            setHasChange(true)
        }
        else{
            setHasChange(false)
        }
    }, [change, hasChange])

    if (shouldShowModal) {
        return (
            <Background>
                <ModalContainer>
                    <Title>Você precisa de troco?</Title>
                    <SubTitle>O total do seu pedido foi de <span>{orderTotal}</span></SubTitle>
                    <CartInput
                        name={"change"}
                        placeholder={"R$ 0,00"}
                        onChange={handleFormatChange}
                    />
                    <SecondaryButton>Não preciso de troco</SecondaryButton>
                    <PrimaryButton disabled={!hasChange}>Confirmar</PrimaryButton>
                </ModalContainer>
            </Background>
        )
    }
    else {

    }
}

const Background = styled.div`
    display: flex;

    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;

    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.8);

    z-index: 5;
`

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    height: min-content;
    width: 90vw;
    bottom: 0;

    padding: 3rem;

    background-color: ${({ theme }) => theme.white};
    border-radius: 4px;

    gap: 0.5rem;
`

const Title = styled.h2`
    font-size: 1rem;
    color: ${({ theme }) => theme["base-title"]};
    font-weight: bold;
    font-family: "Mukta Vaani", sans-serif;
`

const SubTitle = styled.p`
    font-size: 0.875rem;
    color: ${({ theme }) => theme["base-subtitle"]};
    font-family: "Mukta Vaani", sans-serif;

    span {
        font-weight: bold;
    }
`

