import { BookBookmark, Heart, House, ShoppingCartSimple } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


export function BottomMenu() {
    return (
        <Container>
            <Link to={'/'}>{({ isActive }) => (<House size={24} weight={isActive ? 'fill' : 'regular'} />)}</Link>
            <Link to={'/favorites'}>{({ isActive }) => (<Heart size={24} weight={isActive ? 'fill' : 'regular'} />)}</Link>
            <Link to={'/orders'}>{({ isActive }) => (<BookBookmark size={24} weight={isActive ? 'fill' : 'regular'} />)}</Link>
            <Link to={'/cart/mobile'}>{({ isActive }) => (<ShoppingCartSimple size={24} weight={isActive ? 'fill' : 'regular'} />)}</Link>
        </Container>
    )
}

const Container = styled.nav`
    position: fixed;
    bottom: 0px;
    
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    padding-block: .5rem;

    background: white;
    border-top: 1px solid rgba(0, 0, 0, 0.2);


    @media (width > 768px){
        display: none;
    }
`;

const Link = styled(NavLink)`
    color: ${({theme}) =>  theme["base-text"]};

    &.active {
        color: ${({theme}) =>  theme["cordovan-400"]};
        font-weight: fill;
    }
`;