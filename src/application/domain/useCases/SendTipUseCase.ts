import { GameStatus } from "../../types/GameStatus";
import Player from "../entities/Player";
import Room from "../entities/Room";
import InvalidActionForGameState from "../errors/InvalidActionForGameState";
import RoomRepositoryInterface from "../repositories/RoomRepositoryInterface";
import RoundRepositoryInterface from "../repositories/RoundRepositoryInterface";

export default class SendTipUseCase {

    roomRepository: RoomRepositoryInterface;
    roundRepository: RoundRepositoryInterface;

    constructor(roomRepository: RoomRepositoryInterface, roundRepository: RoundRepositoryInterface){

        this.roomRepository = roomRepository;
        this.roundRepository = roundRepository;
    }

    execute(
        room:Room,
        userId: string,
        tip:string,
    ){

        let roundMaster = room.players[room.round.masterId];

        this.validation(room, roundMaster, userId, tip);

        room.round.tip = tip;
        room.status    = GameStatus.waitingForPlayersCardSelection;

        this.roundRepository.update(room.id, room.round);
        this.roomRepository.updateStatus(room.id, room.status);

    }

    private validation(room:Room, roundMaster: Player, userId: string, tip: string)
    {

        if(room.status != GameStatus.waitingForMasterCardSelection){
            throw new InvalidActionForGameState;
        }

        if(roundMaster.id != userId){

            throw new Error("Tu nem é o mestre pra ta dando dica.");
        }

        if(tip.length < 1){

            throw new Error("Cadê a dica vacilão?");
        }


    }

}