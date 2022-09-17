import { ObjectKeyValue } from "../../types/ObjectKeyValue";

export default class Round{

    masterId: string;
    tip: string | null;
    selectedCards: ObjectKeyValue;

    constructor(
        masterId: string,
        selectedCards: ObjectKeyValue,
        tip: string | null
    ){
        this.masterId      = masterId;
        this.selectedCards = selectedCards;
        this.tip           = tip;
    }

    get mastersCard(){

        return this.selectedCards[this.masterId]

    }
}