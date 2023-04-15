import { randomUUID } from "crypto";
import { provide } from "inversify-binding-decorators";

@provide(History)
class History {
    private _id: string;
    private _playerId: string;
    public logs: string[];
    public userName: string;
    public winner: boolean;
    public pokemon1: string;
    public pokemon2: string;

    constructor(
        logs: string[],
        userName: string,
        playerId: string,
        winner: boolean,
        pokemon1: string,
        pokemon2: string,
        id?: string,
    ) {
        this._id = id ?? randomUUID();
        this.logs = logs;
        this.userName = userName;
        this._playerId = playerId;
        this.winner = winner;
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }

    get id(): string {
        return this._id;
    }

    get playerId(): string {
        return this._playerId;
    }
}

export { History };
