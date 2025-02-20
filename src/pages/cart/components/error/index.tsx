import styled from "styled-components";

interface InputErrorProps {
    errorMessage: string
}
export function InputError({ errorMessage }: InputErrorProps) {
    return <Error>{errorMessage}</Error>
}

export const Error = styled.span`
    color: ${({ theme }) => theme.error};
    font-size: 0.75rem;
`