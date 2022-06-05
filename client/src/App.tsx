import { Button } from '@mui/material'
import React from 'react'
import io from 'socket.io-client'
import ChangeThemeButton from './components/ChangeThemeButton'
import { THEMES } from './constants'
import {useStore} from './store/store'

const socket = io("http://localhost:4001")

socket.on("message", (msg) => {
  console.log(msg)
})

const App = (): React.ReactElement => {

  return (
    <div className="App">
      <ChangeThemeButton />
    </div>
  );
}

export default App;
