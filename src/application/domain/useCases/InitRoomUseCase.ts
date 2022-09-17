import { shuffleArray } from "../../../utils/array_manipulation";
import { GameStatus } from "../../types/GameStatus";
import Card from "../entities/Card";
import Room from "../entities/Room";
import CardRepositoryInterface from "../repositories/CardRepositoryInterface";
import PlayerRepositoryInterface from "../repositories/PlayerRepositoryInterface";
import RoomRepositoryInterface from "../repositories/RoomRepositoryInterface";

export default class InitRoomUseCase {

    private cardRepository: CardRepositoryInterface;
    private roomRepository: RoomRepositoryInterface;
    private playerRepository: PlayerRepositoryInterface;

    constructor(
        cardRepository: CardRepositoryInterface,
        roomRepository: RoomRepositoryInterface,
        playerRepository: PlayerRepositoryInterface
    ){
        this.cardRepository   = cardRepository;
        this.roomRepository   = roomRepository;
        this.playerRepository = playerRepository;
    }

    public execute(room: Room) : Room
    {

        let cards = this.cardRepository.getAll();

        this.distributeCards(room, cards);

        this.sortPlayers(room);

        room.status = GameStatus.waitingForMasterCardSelection;

        return room;
    }

    private distributeCards(room: Room, cards: Card[])
    {

        let shuffledCards = shuffleArray(cards);

        for (const playerId in room.players) {
            if (Object.prototype.hasOwnProperty.call(room.players, playerId)) {
                const player = room.players[playerId];

                player.deck = shuffledCards.splice(0, 6);

                this.playerRepository.updateDeck(playerId, player.deck);

            }
        }

        room.stack = shuffledCards;

        this.roomRepository.updateStack(room.id, room.stack);
    }

    private sortPlayers(room: Room)
    {

        let orderedPlayers = shuffleArray(Object.values(room.players));

        let orderedPlayersIds = Array.from(orderedPlayers, e => e.id);

        room.playersOrder = orderedPlayersIds;

        this.roomRepository.updatePlayersOrder(room.id, room.playersOrder);
    }
}