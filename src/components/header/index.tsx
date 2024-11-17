import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom"
import { MagnifyingGlass, ShoppingCartSimple, User } from "@phosphor-icons/react"
import logo from "../../assets/logo-gika-burguer.jpg"
import { SearchBarComponent } from '../../elements/search-bar.tsx/index.tsx'
import { Container, ContainerHeaderTop, LinkMenuIconButton, UsersMenuContainer, UsersMenuIconButton } from './styles.ts'
import { useMenu } from '../../hooks/useMenu.tsx'


export function Header() {
    const { closeSearch } = useMenu();
    const [shouldShowMobileSearchBar, setShouldShowMobileSearchBar] = useState<boolean>(false)
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    function handleShouldShowMobileSearchBar() {
        if (isMobile && !shouldShowMobileSearchBar) {
            setShouldShowMobileSearchBar(true)
        }
    }

    function handleCloseSearchBarComponent() {
        setShouldShowMobileSearchBar(false)
        closeSearch()
    }

    return (
        <Container>
            <ContainerHeaderTop>
                <h1><Link data-testid='link-to-home' to={"/"}><img src={logo} /></Link></h1>
                {
                    shouldShowMobileSearchBar && <SearchBarComponent handleCloseSearchBarComponent={handleCloseSearchBarComponent} />
                }
                <UsersMenuContainer>
                    {
                        !isMobile ?
                            <LinkMenuIconButton data-testid='link-to-cart' to={`/cart`}><ShoppingCartSimple /></LinkMenuIconButton> :
                            !shouldShowMobileSearchBar && <UsersMenuIconButton data-testid='mobile-search-button' onClick={handleShouldShowMobileSearchBar}><MagnifyingGlass /></UsersMenuIconButton>
                    }

                    <UsersMenuIconButton data-testid='link-to-user-profile'><User /></UsersMenuIconButton>
                </UsersMenuContainer>
            </ContainerHeaderTop>
        </Container>
    )
}

