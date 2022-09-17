import { GameStatus } from "../../types/GameStatus";
import { PlayersMap } from "../../types/PlayersMap";
import Round from "./Round";

export default class Room{

    id: string;
    players: PlayersMap;
    status: GameStatus;
    stack: Array<string>;
    ownerId: number;
    round: Round;

    constructor(
        id: string,
        players:PlayersMap,
        status: GameStatus,
        stack: Array<string>,
        ownerId: number,
        round: Round
    ){

        this.id       = id;
        this.players  = players;
        this.status   = status;
        this.stack    = stack;
        this.ownerId = ownerId;
        this.round    = round;

    }

}