import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Outlet } from "react-router-dom"
import { MenuContextProvider } from "./contexts/menu-provider"

export default function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <MenuContextProvider>
                <GlobalStyle />
                <Outlet />
            </MenuContextProvider>
        </ThemeProvider>)
}