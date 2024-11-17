import { MagnifyingGlass, X } from "@phosphor-icons/react"
import { ChangeEvent, useState } from "react"
import styled from "styled-components"
import { useMenu } from "../../hooks/useMenu"

interface SearchBarComponentProps {
    handleCloseSearchBarComponent: () => void
}

export function SearchBarComponent({ handleCloseSearchBarComponent }: SearchBarComponentProps) {
    const { filterMenuItemsForSearch } = useMenu()
    const [searchedName, setSearchedName] = useState('')

    function handleSearchInput(e: ChangeEvent<HTMLInputElement>) {
        setSearchedName(e.target.value)
        filterMenuItemsForSearch(e.target.value)
    }
    
    return (
        <Container>
            <span><MagnifyingGlass size={16} /></span>
            <SearchBar 
                type="text" 
                placeholder="Buscar por item"
                value={searchedName}
                onChange={handleSearchInput} />
            <button data-testid='close-search-button' onClick={handleCloseSearchBarComponent}><X size={16} /></button>
        </Container>
    )
}

const Container = styled.form`
    display: flex;
    width: 60%;

    align-items: center;
    justify-content: space-around;
    
    border: 1px solid ${(props) => props.theme["base-subtitle"]};
    border-radius: 4px;

    span {
        display: inline-block;
        margin-top: 0.30rem;
        color: ${(props) => props.theme["cordovan-500"]};
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        background: none;
        border: 0;

        outline: none;
    }
`

const SearchBar = styled.input`
    width: 70%;
    border: none;

    font-family: "Mukta Vaani", sans-serif;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};

    &::placeholder {
        margin-left: 0.25rem;
        color: ${(props) => props.theme["base-text"]};

        font-family: "Mukta Vaani", sans-serif;
    }
`