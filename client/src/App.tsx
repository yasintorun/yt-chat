import { Button } from '@mui/material'
import React from 'react'
import io from 'socket.io-client'
import { THEMES } from './constants'
import {useStore} from './store/store'
const socket = io("http://localhost:4001")

socket.on("message", (msg) => {
  console.log(msg)
})

const App = (): React.ReactElement => {
  const [state, dispatch, actionNames] = useStore();

  const handleThemeChange = (): void => {
    const newTheme = state.theme.currentTheme === 'dark' ? THEMES.LIGHT : THEMES.DARK;
    dispatch(actionNames.THEME.CHANGE_THEME, newTheme);
  }

  return (
    <div className="App">
      <Button onClick={handleThemeChange}>Change Theme</Button>
    </div>
  );
}

export default App;
