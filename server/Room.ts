import { User } from "./User";

export interface Room {
    id: number;
    name: string,
    maxUser: number,
    users: User[],
    owner: User,
    isOpen: boolean,
}