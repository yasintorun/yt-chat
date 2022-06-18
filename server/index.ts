import { CreateRoomOptions } from './models/RoomOptions';
import http from "http";
import express from "express";
import cors from "cors";
import socketIO from "socket.io";
import { Room } from "./models/Room";
import { RoomManager } from "./RoomManager";
import { User } from "./models/User";
const PORT = process.env.PORT || 4001;

const app = express()
const appServer = http.createServer(app)
const io = new socketIO.Server(appServer, {
    cors: {
        origin: ["http://localhost:3000"]
    }
})


const roomManager = new RoomManager();

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.json({
        server: "Server is running",
        port: PORT,
        channel: "chat",
        message: "Welcome to the chat",
        status: true,
    })
});

app.post("/create-room", (req, res, next) => {
    const options:CreateRoomOptions = req.body
    const owner = User.createUser(options.owner)

    const room = roomManager.createRoom(options.roomName, options.maxUser, owner);
    res.json(room)
})

app.get("/join", (req, res) => {
})

io.on("connection", socket => {
    console.log("BAGLANDI: " + socket.id)

    socket.on("disconnect", () => {
        console.log("BAGLANTI KOPTU: " + socket.id)
    })

    socket.emit("message", "Test")
})


appServer.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})