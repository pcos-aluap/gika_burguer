import styled from "styled-components"
import { MenuItem } from "../../../@types/menu"
import { MenuCard } from "../../../components/menu-card"

interface MenuItemsListProps {
    menuItems: MenuItem[]
    categoryId: number
}

export function MenuItemsList({menuItems, categoryId}: MenuItemsListProps) {
    return ( 
        <Container>
            {
                menuItems.map((item) => (<MenuCard key={item.id} image={item.image} name={item.name} description={item.description} price={item.cost} available={item.available} id={item.id} categoryId={categoryId}/>))
            }
        </Container>
    )
}


const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 20rem));
    justify-content: space-evenly;
    grid-row-gap: 40px;
    margin-inline: auto;
`