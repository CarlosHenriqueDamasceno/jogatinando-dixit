import { GameStatus } from "../../types/GameStatus";
import { PlayersMap } from "../../types/PlayersMap";
import Round from "./Round";

export default class Room{

    id: string | null;
    players: PlayersMap;
    status: GameStatus;
    stack: Array<string>;
    ownerId: number;
    round: Round;
    playersOrder: Array<string>;

    constructor(
        id: string | null,
        players:PlayersMap,
        status: GameStatus,
        stack: Array<string>,
        ownerId: number,
        round: Round,
        playersOrder: Array<string>
    ){

        this.id           = id;
        this.players      = players;
        this.status       = status;
        this.stack        = stack;
        this.ownerId      = ownerId;
        this.round        = round;
        this.playersOrder = playersOrder;

    }

}