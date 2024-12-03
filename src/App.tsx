import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Outlet } from "react-router-dom"
import { MenuContextProvider } from "./contexts/menu-provider"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./lib/react-query"
import { DetailsModalContextProvider } from "./contexts/details-modal-provider"
import { CartContextProvider } from "./contexts/cart-provider"

export default function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <QueryClientProvider client={queryClient}>
                <CartContextProvider>
                    <MenuContextProvider>
                        <DetailsModalContextProvider>
                            <GlobalStyle />
                            <Outlet />
                        </DetailsModalContextProvider>
                    </MenuContextProvider>
                </CartContextProvider>
            </QueryClientProvider>
        </ThemeProvider>
    )
}