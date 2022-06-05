
import { ThemeProvider } from "@emotion/react";
import React from "react";
import { useStore } from "../store/store";
import themes from '../theme'

const DynamicThemeProvider = (props: any) => {
    const [state] = useStore();

    return (
        <ThemeProvider theme={themes[state.theme.currentTheme]}>
            {props.children}
        </ThemeProvider>
    );
};

export default React.memo(DynamicThemeProvider);