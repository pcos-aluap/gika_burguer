import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Outlet } from "react-router-dom"
import { MenuContextProvider } from "./contexts/menu-provider"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./lib/react-query"
import { DetailsModalContextProvider } from "./contexts/details-modal-provider"

export default function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <QueryClientProvider client={queryClient}>
                <MenuContextProvider>
                    <DetailsModalContextProvider>
                        <GlobalStyle />
                        <Outlet />
                    </DetailsModalContextProvider>
                </MenuContextProvider>
            </QueryClientProvider>
        </ThemeProvider>
    )
}