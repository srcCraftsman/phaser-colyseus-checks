// MyRoomState.ts
import { MapSchema, Schema, type } from "@colyseus/schema";

export class Player extends Schema {
    @type("number") x: number;
    @type("number") y: number;
    inputQueue: any[] = [];
    
}

export class MyRoomState extends Schema {
    @type({ map: Player }) players = new MapSchema<Player>();
}