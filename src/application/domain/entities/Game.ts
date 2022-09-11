import Card from "./Card";
import Player from "./Player";

export default class Game{

    readonly players: Player[];
    readonly gameState: gameState;
    readonly stack: Card[];

    constructor(
        players:Player[],
        gameState: gameState,
        stack: Card[]
    ){

        this.players   = players;
        this.gameState = gameState;
        this.stack     = stack;

    }

}

enum gameState{
    waitingForPlayers,
    waitingForMasterCardSelection,
    waitingFor
}