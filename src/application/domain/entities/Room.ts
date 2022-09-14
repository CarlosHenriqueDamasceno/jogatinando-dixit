import Card from "./Card";
import Player from "./Player";
import Round from "./Round";

export default class Room{

    id: string;
    players: Player[];
    gameState: gameState;
    stack: Card[];
    master: number;
    round: Round;

    constructor(
        id: string,
        players:Player[],
        gameState: gameState,
        stack: Card[],
        master: number,
        round: Round
    ){

        this.id        = id;
        this.players   = players;
        this.gameState = gameState;
        this.stack     = stack;
        this.master    = master;
        this.round     = round;

    }

}

export enum gameState{
    waitingForPlayers = "waitingForPlayers",
    waitingForMasterCardSelection = "waitingForMasterCardSelection",
    waitingForPlayersCardSelection = "waitingForPlayersCardSelection",
    waitingForPlayersVoting = "waitingForPlayersVoting",
    displayingRoundResults = "displayingRoundResults"
}