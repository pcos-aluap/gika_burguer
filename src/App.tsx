import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Outlet } from "react-router-dom";
import { Menu } from "./pages/menu";

export default function App() {
    return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Outlet />
    </ThemeProvider>)
}