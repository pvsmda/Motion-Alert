import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import {Nav} from '../components/Nav';
import usePersistedState from "../utils/usePersistedState";
import { ToggleThemeButton } from "../components/ToggleThemeButton";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Nav> </Nav>
            <ToggleThemeButton toggleTheme={toggleTheme} />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
