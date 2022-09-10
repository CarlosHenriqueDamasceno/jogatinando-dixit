import Card from "./Card";
import Player from "./Player";

export default class Game{

    readonly players: Player[];
    readonly gameState: number;
    readonly stack: Card[];

    constructor(
        players:Player[],
        gameState: number,
        stack: Card[]
    ){

        this.players   = players;
        this.gameState = gameState;
        this.stack     = stack;

    }

}