import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton, styled } from '@mui/material';
import React from 'react';
import { THEMES } from '../constants';
import { useStore } from '../store/store';

const ChangeThemeButton = () => {
    const [state, dispatch, actionNames] = useStore();

    const handleThemeChange = (): void => {
        const newTheme = state.theme.currentTheme === 'dark' ? THEMES.LIGHT : THEMES.DARK;
        dispatch(actionNames.THEME.CHANGE_THEME, newTheme);
    }

    return (
        <div>
            <IconButton 
                onClick={handleThemeChange} 
                title={state.theme.currentTheme === THEMES.LIGHT ? "Dark Mode" : "Light Mode"}
                sx={{ position: 'fixed', top: 20, right: 50 }}
            >
                {state.theme.currentTheme === THEMES.LIGHT ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
        </div>
    )
}

export default ChangeThemeButton