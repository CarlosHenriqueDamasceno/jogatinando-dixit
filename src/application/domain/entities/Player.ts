import Card from "./Card";

export default class Player{

    nick: string;
    id: string;
    score: number;
    color: string;
    deck: Array<string>;

    constructor(
        id: string,
        nick: string,
        color: string,
        score:number,
        deck: Array<string>,
    ){
        this.id    = id;
        this.nick  = nick;
        this.color = color;
        this.score = score;
        this.deck  = deck;
    }

}