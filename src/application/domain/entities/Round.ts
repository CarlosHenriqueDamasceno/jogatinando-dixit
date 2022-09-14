import Card from "./Card";

export default class Round{

    readonly master: number;
    readonly tip: string | null;
    readonly selectedCards: Card[];

    constructor(
        master: number,
        selectedCards: Card[],
        tip: string | null,
    ){
        this.master        = master;
        this.selectedCards = selectedCards;
        this.tip           = tip;
    }
}