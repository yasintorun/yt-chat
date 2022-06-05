import { THEMES } from './../constants';
import { useEffect, useState } from "react";
import configureThemeStore from './theme-store'

let globalState: IStore;
let listeners: Function[] = [];
let actions:Record<string, Function> = {};

export const useStore = (shouldListen = true): [IStore, IDispatch, typeof ActionName] => {
    const setState = useState(globalState)[1];

    useEffect(() => {
        if (shouldListen) {
            listeners.push(setState);
        }

        return () => {
            if (shouldListen) {
                listeners = listeners.filter((li) => li !== setState);
            }
        };
    }, [setState, shouldListen]);

    return [globalState, dispatch, ActionName];
};

export const initStore = (userActions: any, initialState: any) => {
    if (initialState) {
        globalState = { ...globalState, ...initialState };
    }
    actions = { ...actions, ...userActions };
};

interface IDispatch {
    (actionName: string, payload?: any): void;
} 

export const dispatch = (actionIdentifier: string, payload: any): void => {
    const action = actions[actionIdentifier]
    if (!action) return;
    const newState = action(globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
        listener(globalState);
    }
};

export const ActionName = {
    THEME: {
        CHANGE_THEME: "CHANGE_THEME"
    }
}

export const configureBaseStore = () => {
    configureThemeStore();
}

export interface IStore {
    theme: {
        currentTheme: THEMES.LIGHT | THEMES.DARK
    }
} 