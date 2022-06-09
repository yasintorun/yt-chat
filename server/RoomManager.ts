import socketIO from "socket.io";
import { Room } from "./Room";
import { User } from "./User";

export class RoomManager {
    private channel: socketIO.Server = null;
    private rooms: Room[] = [];
    // private roomId: number = 0;

    public constructor(channel: socketIO.Server) {
        this.channel = channel;
    }

    public createRoom(name: string, maxUser: number, owner: User): Room {
        const room: Room = {
            id: 1,
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

    public getRoomById(id: number): Room | undefined {
        return this.rooms.find(r => r.id === id);
    }

    public getRoomByName(name: string): Room | undefined {
        return this.rooms.find(r => r.name === name);
    }
}