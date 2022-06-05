import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io("http://localhost:4001")

socket.on("message", (msg) => {
  console.log(msg)
})

const App = (): React.ReactElement => {

  return (
    <div className="App">
      {socket ? (
        <p>Connected</p>
      ) : (
        <p>Not Connected</p>
      )}
    </div>
  );
}

export default App;
