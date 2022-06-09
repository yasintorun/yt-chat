import http from "http";
import express from "express";
import cors from "cors";
import socketIO from "socket.io";

const PORT = process.env.PORT || 4001;

const app = express()
const appServer = http.createServer(app)
const channel = new socketIO.Server(appServer, {
    cors: {
        origin: ["http://localhost:3000"]
    }
})

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
    console.log("BAGLANDI: " + socket.id)

    socket.on("disconnect", () => {
        console.log("BAGLANTI KOPTU: " + socket.id)
    })

    socket.emit("message", "Test")

})


appServer.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})