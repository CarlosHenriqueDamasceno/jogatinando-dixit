export default class Player{

    readonly nick: String;
    readonly id: number;
    readonly score: number;
    readonly color: String;

    constructor(
        id: number,
        nick: String,
        color: String,
        score:number
    ){
        this.id    = id;
        this.nick  = nick;
        this.color = color;
        this.score = score;
    }

}