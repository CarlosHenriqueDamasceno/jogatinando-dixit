import Round from "../entities/Round";

export default interface RoundRepositoryInterface{

    update(roomId: string, round: Round):void

}