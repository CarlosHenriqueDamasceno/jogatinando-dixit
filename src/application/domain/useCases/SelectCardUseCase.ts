import { GameStatus } from "../../types/GameStatus";
import Player from "../entities/Player";
import Room from "../entities/Room";
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
        userId:string,
        cardId:string
    ){

        room.round.selectedCards[userId] = cardId;

        if(Object.keys(room.players).length == Object.keys(room.round.selectedCards).length){

            room.status = GameStatus.waitingForPlayersVoting;
            this.roomRepository.updateStatus(room.id, room.status);
        }

        this.roundRepository.update(room.id, room.round);

    }

    private validation(player: Player, cardId: string)
    {

        let playerOwnsThisCard = player.deck.find((e) => e.id == cardId);

        if(playerOwnsThisCard){

            throw new Error("Essa carta não é tua.");
        }

    }

}