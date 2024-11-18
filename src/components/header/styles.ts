import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    width: 100%;

    background: white;
`;

export const ContainerHeaderTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0.5rem 4rem;

    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);

    h1 {
        display: inline-block;
        height: 3rem;
        width: 3rem;
    }

    img {
        height: 3rem;
        width: 3rem;
    }

    @media (width < 768px) {
        padding-inline: 2rem;
        gap: 1rem;
    }
`;

export const UsersMenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`;

export const LinkMenuIconButton = styled(Link)`
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    border: none;
    border-radius: 99px;

    background: ${(props) => props.theme["cordovan-500"]};

    transition: 0.2s;

    color: ${(props) => props.theme.white};
    font-size: 1.25rem;


    &:hover {
        background: ${(props) => props.theme["cordovan-400"]};
    }

    @media (width < 768px) {
        width: 1.5rem;
        height: 1.5rem;

        font-size: 0.875rem;
    }
`;

export const UsersMenuIconButton = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    border: none;
    border-radius: 99px;

    background: ${(props) => props.theme["cordovan-500"]};

    transition: 0.2s;

    color: ${(props) => props.theme.white};
    font-size: 1.25rem;


    &:hover {
        background: ${(props) => props.theme["cordovan-400"]};
    }

    @media (width < 768px) {
        width: 1.5rem;
        height: 1.5rem;

        font-size: 0.875rem;
    }
`;

export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0.875rem 7rem;

    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    @media (width < 768px){
        overflow-x: scroll;
        padding-inline: 2rem;

        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const LinksList = styled.ul`
    display: flex;
    gap: 1rem;
    list-style-type: none;
`;

export const NavBarLink = styled(NavHashLink)`
    display: inline-block;
    white-space: nowrap;
    font-family: "Padauk", sans-serif;
    font-size: 1rem;
    color: #a6a5a5;
    font-weight: 400;

    transition: 0.2s;

    text-decoration: none;
        
    &:hover {
        color: ${(props) => props.theme["cordovan-400"]};
        font-weight: bold;
    }

    &.active {
        color: ${(props) => props.theme["cordovan-500"]};
        font-weight: bolder;
    }
`;

export const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 17rem;

    border-bottom: 1px solid rgba(0, 0, 0);

    gap: 0.5rem;

    @media (width < 768px){
       display: none;
    }
`;

export const SearchBar = styled.input`
    width: 15rem;
    border: none;

    font-family: "Mukta Vaani", sans-serif;
    color: ${(props) => props.theme["base-text"]};

    &::placeholder {
        margin-left: 0.25rem;
        color: ${(props) => props.theme["base-text"]};

        font-family: "Mukta Vaani", sans-serif;
    }
`;