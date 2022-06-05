import { THEMES, STORAGE_KEYS } from './../constants';
import { ActionName, initStore, IStore } from './store';
const configureStore = () => {
    const localTheme = localStorage.getItem(STORAGE_KEYS.THEME);

    const themeState = {
        theme: {
            currentTheme: localTheme || THEMES.LIGHT,
        }
    }

    const actions = {
        [ActionName.THEME.CHANGE_THEME]: (state:IStore, themeName: THEMES.LIGHT | THEMES.DARK) => {
            const theme = state.theme;
            theme.currentTheme = themeName;
            return {...state, theme}
        }
    }

    initStore(actions, themeState);
}

export default configureStore;