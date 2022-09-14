import Card from "./Card";

export default class Player{

    nick: string;
    id: number;
    score: number;
    color: string;
    deck: Card[];

    constructor(
        id: number,
        nick: string,
        color: string,
        score:number,
        deck: Card[],
    ){
        this.id    = id;
        this.nick  = nick;
        this.color = color;
        this.score = score;
        this.deck  = deck;
    }

}