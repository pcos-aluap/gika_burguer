import styled from "styled-components";

interface InputErrorProps {
    errorMessage: string
}
export function InputError({ errorMessage }: InputErrorProps) {
    return <span>{errorMessage}</span>
}

export const Error = styled.span`
    color: ${({ theme }) => theme.error};
    font-size: 0.75rem;
`