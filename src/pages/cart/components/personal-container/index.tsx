import { useFormContext } from "react-hook-form";
import { InformationContainer } from "../../to-desktop/styles";
import { NewOrderFormInputs } from "../../to-desktop";
import { CartInput } from "../input";

export function PersonalInformationComponent() {
    const { setValue, formState: { errors } } = useFormContext<NewOrderFormInputs>()

    const handleFormatPhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        const phoneNumberToBeFormatted = event.target.value.replace(/\D/g, '')

        if (phoneNumberToBeFormatted.length <= 2) {
            setValue('phone', `(${phoneNumberToBeFormatted}`)
        }
        else if (phoneNumberToBeFormatted.length <= 6) {
            setValue('phone', `(${phoneNumberToBeFormatted.slice(0, 2)}) ${phoneNumberToBeFormatted.slice(2)}`)
        }
        else {
            setValue('phone', `(${phoneNumberToBeFormatted.slice(0, 2)}) ${phoneNumberToBeFormatted.slice(2, 7)}-${phoneNumberToBeFormatted.slice(7, 11)}`)
        }
    }

    return (
        <InformationContainer>
            <h2>Dados Pessoais</h2>
            <CartInput
                name={"name"}
                placeholder={"Nome"}
                error={errors.name}
            />
            <CartInput
                name={"phone"}
                placeholder={"Telefone"}
                onChange={handleFormatPhoneNumber}
                error={errors.phone}
            />
        </InformationContainer>
    )
}