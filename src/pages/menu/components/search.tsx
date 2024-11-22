import { MenuItemsList } from "./menu-items-list"
import { useMenu } from "../../../hooks/useMenu"
import styled from "styled-components"

export function SearchedMenuItems() {
    const { filteredMenuItems } = useMenu()

    return (
        <Container>
            {
                filteredMenuItems.length == 0 ?
                    <ItemNotFoundContainer>
                        <Title>Item buscado não foi encontrado!</Title>
                    </ItemNotFoundContainer>
                    :
                    <MenuItemsList menuItems={filteredMenuItems} categoryId={0} />
            }  
        </Container>
    )

}

const Container = styled.main`
    margin: 5rem;

    @media (width < 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;

        margin-inline: auto;

        margin-block: 5rem;
    }
`

const ItemNotFoundContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.h2`
    font-family: "Padauk", sans-serif;
    text-align: center;
    color: ${(props) => props.theme["base-title"]};
`