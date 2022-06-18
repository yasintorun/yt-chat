import { Random } from './../Utils';
import {v4} from 'uuid' 
import { Socket } from 'socket.io';
export interface IUser {
}

export class User {
    id: string = "";
    name: string = "";
    color: string = "";
    socket: Socket | null =  null;
    
    constructor(id:string, name:string, color:string) {
        this.id = id; 
        this.name = name;
        this.color = color
    }

    static createUser(name:string="unnamed", color:string | undefined = undefined ) {
        const id = v4()
        
        if(!color) {
            const r = Random(Random(0, 50), Random(220, 255))
            const g = Random(50, Random(150, 255))
            const b = Random(Random(20, 100), Random(100, 255))
            color =  `rgb(${r}, ${g}, ${b})`
        }

        return new User(id, name, color);
    }
}