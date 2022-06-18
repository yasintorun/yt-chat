import { User } from "./User";

export class Room {
    id: string = "";
    name: string = "";
    maxUser: number = 0;
    users: User[] = [];
    owner: User | null = null;
    isOpen: boolean = false;
}