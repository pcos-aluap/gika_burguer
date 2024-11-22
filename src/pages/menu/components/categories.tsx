import styled from "styled-components"
import { MenuCategory } from "../../../@types/menu"
import { MenuItemsList } from "./menu-items-list"


export function CategoryComponent({id, name, items}: MenuCategory){
    return (
        <Container>
            <PseudoElement id={`${id}`}></PseudoElement>
            <CategoryName>{name}</CategoryName>
            <MenuItemsList menuItems={items} categoryId={id}/>
        </Container>
    )
}

const PseudoElement = styled.div`
    height: 5rem;
`

const Container = styled.section`
    margin-inline: 5rem;

    @media (max-width: 768px){
        margin-inline: 2rem;
        justify-content: center;
    } 
    
`

const CategoryName = styled.h3`
    display: inline-block;
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Libre Franklin", sans-serif;
    font-weight: bold;
    font-size: 1.25rem;

    margin-bottom: 2rem;
`