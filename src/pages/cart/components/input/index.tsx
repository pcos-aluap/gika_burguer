import styled from "styled-components";
import { NewOrderFormInputs } from "../../to-desktop";
import { FieldError, useFormContext } from "react-hook-form";
import { InputError } from "../error";

interface InputProps {
    gridArea?: 'cep' | 'street' | 'number' | 'fullAddress' | 'neighborhood' | 'landMark' | 'state'
    name: keyof NewOrderFormInputs
    placeholder: string
    error?: FieldError
    validationRules?: Record<string, any>
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean
}

export function CartInput({ gridArea, placeholder, name, error, validationRules, onBlur, onChange, disabled }: InputProps) {
    const { register } = useFormContext<NewOrderFormInputs>()

    return (
        <InputContainer gridArea={gridArea}>
            <Input
                placeholder={placeholder}
                {...register(name, validationRules)}
                onBlur={onBlur}
                onChange={onChange}
                disabled={disabled}
            />
            {
                error &&
                <InputError errorMessage={error.message!} />
            }
        </InputContainer>
    )

}

interface InputContainerProps {
    gridArea?: 'cep' | 'street' | 'number' | 'fullAddress' | 'neighborhood' | 'landMark' | 'state'
}

const InputContainer = styled.div<InputContainerProps>`
    grid-area: ${({ gridArea }) => gridArea ? gridArea : 'none'};
    display: flex;
    flex-direction: column;

    margin-block: 0.25rem;
    margin-right: 0.5rem;
`

const Input = styled.input`
    height: 3rem;

    padding-left: 0.25rem;
`

