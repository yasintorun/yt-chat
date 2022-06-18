import socketIO from "socket.io";
import { Room } from "./models/Room";
import { User } from "./models/User";
import {v4} from 'uuid'
export class RoomManager {
    private rooms: Room[] = [];

    public joinRoom() {

    }

    public createRoom(name: string, maxUser: number, owner: User): Room {
        const room: Room = {
            id: v4(), 
            name,
            maxUser,
            users: [owner],
            owner,
            isOpen: true,
        }
        this.rooms.push(room);   
        return room;
    }

    public addUserToRoom(room: Room, user: User): void {
        room.users.push(user);
    }

    public removeUserFromRoom(room: Room, user: User): void {
        room.users = room.users.filter(u => u.id !== user.id);
    }

    public getRoomById(id: string): Room | undefined {
        return this.rooms.find(r => r.id === id);
    }

    public getRoomByName(name: string): Room | undefined {
        return this.rooms.find(r => r.name === name);
    }
}