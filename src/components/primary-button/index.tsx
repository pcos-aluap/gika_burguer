import React, { ReactNode } from "react"
import styled from "styled-components"

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export function PrimaryButton({ type, children, onClick, disabled }: PrimaryButtonProps) {
    return (
        <Button type={type} onClick={onClick} disabled={disabled} >{children}</Button>
    )
}

const Button = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem 1rem;

    font-family: "Mukta Vaani", sans-serif;
    color: ${({theme}) => theme.white};
    font-weight: 600;
    text-transform: uppercase;

    border: none;
    border-radius: 4px;

    background: ${({theme}) => theme["cordovan-500"]};

    transition: 0.2s;

    &:focus {
        background: ${({theme}) => theme["cordovan-400"]};
    }

    &:disabled {
        background: ${({theme}) => theme.disabled};
    }

    @media (width < 768px) {
        font-size: 0.75rem;
    }
`