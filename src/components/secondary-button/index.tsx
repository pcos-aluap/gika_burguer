import { ReactNode } from "react";
import styled from "styled-components";

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export function SecondaryButton({ type, onClick, disabled, children }: SecondaryButtonProps) {
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
    color: ${({theme}) => theme["cordovan-500"]};
    font-weight: 600;
    text-transform: uppercase;

    border: 1px solid ${({theme}) => theme["cordovan-500"]};
    border-radius: 4px;

    background: transparent;

    transition: 0.2s;

    &:focus {
        color: ${({theme}) => theme["cordovan-400"]};
        border-color: ${({theme}) => theme["cordovan-400"]};
    }

    @media (width < 768px) {
        font-size: 0.75rem;
    }
`