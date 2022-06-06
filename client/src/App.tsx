import React from 'react'
import ChangeThemeButton from './components/ChangeThemeButton'
import ChatPage from './pages/ChatPage';
import LandingPage from './pages/LandingPage'

// const socket = io("http://localhost:4001")

// socket.on("message", (msg) => {
//   console.log(msg)
// })

const App = (): React.ReactElement => {

  return (
    <div className="App">
      <ChangeThemeButton />
      <ChatPage />
      {/* <LandingPage /> */}
    </div>
  );
}

export default App; 
