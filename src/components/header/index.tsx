import { ChangeEvent, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom"
import { MagnifyingGlass, ShoppingCartSimple, User } from "@phosphor-icons/react"
import logo from "../../assets/logo-gika-burguer.jpg"
import { SearchBarComponent } from '../../elements/search-bar.tsx/index.tsx'
import { Container, ContainerHeaderTop, LinkMenuIconButton, LinksList, Nav, NavBarLink, SearchBar, SearchBarContainer, UsersMenuContainer, UsersMenuIconButton } from './styles.ts'
import { useMenu } from '../../hooks/useMenu.tsx'
import { HeaderNavSkeleton } from './components/hearder-nav-skeleton.tsx'

interface HeaderLink {
    id: number;
    name: string;
}

export function Header() {
    const { menu, filterMenuItemsForSearch, closeSearch } = useMenu()
    const [searchedName, setSearchedName] = useState('')
    const [headersLinks, setHeadersLinks] = useState<HeaderLink[]>([])
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

    function handleSearchInput(e: ChangeEvent<HTMLInputElement>) {
        setSearchedName(e.target.value)
        filterMenuItemsForSearch(e.target.value)
    }

    useEffect(() => {
        let links: HeaderLink[] = []

        menu.map(category => {
            const parcialCategory: HeaderLink = {
                id: category.id,
                name: category.name,
            }

            links.push(parcialCategory)
        });

        setHeadersLinks(links)
    }, [menu])

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
            <Nav>
                <LinksList>
                    {
                        headersLinks.length > 0 ?
                        headersLinks.map(link => <li key={link.id}><NavBarLink to={`#${link.id}`} end>{link.name}</NavBarLink></li>) :
                        <HeaderNavSkeleton />
                    }

                </LinksList>
                {
                    !isMobile &&
                    <SearchBarContainer>
                    <SearchBar
                        placeholder="Buscar por item"
                        value={searchedName}
                        onChange={handleSearchInput}
                    />
                    <MagnifyingGlass size={16} />
                </SearchBarContainer>
                }
            </Nav>
        </Container>
    )
}

