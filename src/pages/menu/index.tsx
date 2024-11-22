import styled from "styled-components"

import { CategoryComponent } from "./components/categories"
import { SearchedMenuItems } from "./components/search"
import { useQuery } from "@tanstack/react-query"
import { getMenu } from "../../api/menu/get-menu"
import { DetailsModal } from "./components/details-modal"
import { Header } from "../../components/header"
import { useMenu } from "../../hooks/useMenu"

export function Menu(){
    const { menu, isSearching, addMenu } = useMenu()

    const { data, isLoading, isError } = useQuery({
        queryKey: ["getMenu"],
        queryFn: () => getMenu()
    })

    if(isLoading) {
        return <div>Página em carregamento</div>
    }

    if(isError) {
        return <div>Houve um erro ao acessar a página</div>
    }

    else {
        addMenu(data!);

        return (
            <>
                <DetailsModal />
                <Header />
                <Container>
                    <Body>
                        {
                            isSearching ? 
                                <SearchedMenuItems />
                            :
                                menu.map(caterory => (
                                    <CategoryComponent 
                                        key={caterory.id} 
                                        id={caterory.id} 
                                        name={caterory.name} 
                                        items={caterory.items}
                                    />
                                ))
                        }
                    </Body>
                </Container>
                
            </>
        )
    }
}



const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Body = styled.main`
    width: 100%;
    margin-block: 5rem;
`