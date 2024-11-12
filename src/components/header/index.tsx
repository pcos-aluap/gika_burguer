import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MagnifyingGlass, ShoppingCartSimple, User } from "@phosphor-icons/react";
import logo from "../../assets/logo-gika-burguer.jpg";
import { SearchBarComponent } from '../../elements/search-bar.tsx/index.tsx';


export function Header() {
    const [shouldShowMobileSearchBar, setShouldShowMobileSearchBar] = useState<boolean>(false);
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    function handleShouldShowMobileSearchBar() {
        if (isMobile && !shouldShowMobileSearchBar) {
            setShouldShowMobileSearchBar(true);
        }
    }

    function handleCloseSearchBarComponent() {
        setShouldShowMobileSearchBar(false);
        //closeSearch();
    }

    return (
        <Container>
            <ContainerHeaderTop>
                <h1><Link to={"/"}><img src={logo} /></Link></h1>
                {
                    shouldShowMobileSearchBar && <SearchBarComponent handleCloseSearchBarComponent={handleCloseSearchBarComponent} />
                }
                <UsersMenuContainer>
                    {
                        !isMobile ?
                            <LinkMenuIconButton to={`/cart`}><ShoppingCartSimple /></LinkMenuIconButton> :
                            !shouldShowMobileSearchBar && <UsersMenuIconButton onClick={handleShouldShowMobileSearchBar}><MagnifyingGlass /></UsersMenuIconButton>
                    }

                    <UsersMenuIconButton><User /></UsersMenuIconButton>
                </UsersMenuContainer>
            </ContainerHeaderTop>
        </Container>
    )
}

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