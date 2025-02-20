import { useFormContext } from "react-hook-form";
import { InformationContainer } from "../../to-desktop/styles";
import { NewOrderFormInputs } from "../../cart-form";
import { useCallback } from "react";
import { debounce } from "lodash";
import { getAddressByCEP } from "../../../../api/utils/search-cep";
import { CartInput } from "../input";
import styled from "styled-components";

export function AddressInformationComponent() {
    const { setValue, setFocus, clearErrors, setError, formState: { errors } } = useFormContext<NewOrderFormInputs>()

    const cepValidationRegex = new RegExp(`\d{5}-\d{3}`)

    const handleFindAddress = useCallback(
        debounce(async (e: React.FocusEvent<HTMLInputElement>) => {
            const cep = e.target.value;

            clearErrors('cep')

            try {
                const res = await getAddressByCEP(cep);
                setValue('street', res.street);
                setValue('neighborhood', res.neighborhood);
                setFocus('number');
            } catch {
                setError('cep', { message: 'CEP inválido' });
            }
        }, 500),
        []
    )


    return (
        <InformationContainer>
            <h2>Endereço</h2>
            <AddressForm>
                <CartInput
                    gridArea={"cep"}
                    name={"cep"}
                    placeholder={"CEP"}
                    validationRules={{
                        pattern: {
                            value: cepValidationRegex,
                            message: 'Formato inválido'
                        }
                    }}
                    onBlur={handleFindAddress}
                    error={errors.cep}
                />
                <CartInput
                    name={"street"}
                    placeholder={"Rua"}
                    gridArea="street"
                    error={errors.street}
                />
                <CartInput
                    name={"number"}
                    placeholder={"Número"}
                    gridArea="number"
                    error={errors.number}
                />
                <CartInput
                    name={"fullAddress"}
                    placeholder={"Complemento"}
                    gridArea="fullAddress"
                    error={errors.fullAddress}
                />
                <CartInput
                    name={"neighborhood"}
                    placeholder={"Bairro"}
                    gridArea="neighborhood"
                    error={errors.neighborhood}
                />
                <CartInput
                    name={"landMark"}
                    placeholder={"Ponto de Referência"}
                    gridArea="landMark"
                    error={errors.landMark}
                />
            </AddressForm>
        </InformationContainer>
    )
}

const AddressForm = styled.div`
    width: 90%;
    display: grid;
    grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood landMark state';
    grid-template-columns: 200px 1fr;

    @media (width < 768px) {
        width: auto;
        display: flex;
        flex-direction: column;
    }
`