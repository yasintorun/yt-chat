import { THEMES } from './constants';
import { createTheme } from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: '#8a63de',
        },
        secondary: {
            main: '#da1e53',
        },
        background: {
            default: '#272c39',
            paper: '#303048',
        },
    },
    typography: {
        fontFamily: "'Segoe UI', 'Helvetica'"
    }
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#55349c',
        },
        secondary: {
            main: '#ff0048',
        },
        background: {
            default: '#f7f4ff',
            paper: '#fff',
        },
    },
    typography: {
        fontFamily: "'Segoe UI', 'Helvetica'"
    },
});

export default {
    [THEMES.LIGHT]: lightTheme,
    [THEMES.DARK]: darkTheme
};