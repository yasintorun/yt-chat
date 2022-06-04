const http = require("http")
const express = require("express")
const cors = require("cors")
const socketIO = require("socket.io")

const PORT = process.env.PORT || 4001;

const app = express()
const appServer = http.createServer(app)
const channel = new socketIO.Server(appServer)
channel.path("chat")
app.use(cors())

app.get('/', (req, res) => {
    res.json({
        server: "Server is running",
        port: PORT,
        channel: "chat",
        message: "Welcome to the chat",
        status: true,
    })
  });

channel.on("connection", socket => {
    console.log("BAGLANDI", socket)
})

appServer.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})