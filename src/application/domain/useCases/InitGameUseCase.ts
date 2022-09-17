import { shuffleArray } from "../../../utils/array_manipulation";
import Card from "../entities/Card";
import Room, { gameState } from "../entities/Room";
import Round from "../entities/Round";
import CardRepositoryInterface from "../repositories/CardRepositoryInterface";

export default class InitRoomUseCase {

    private cardRepository: CardRepositoryInterface;

    constructor(cardRepository: CardRepositoryInterface){
        this.cardRepository = cardRepository;
    }

    public execute(room: Room) : Room
    {

        let cards = this.cardRepository.getAll();

        this.distributeCards(room, cards);

        this.sortPlayers(room);

        room.round = new Round(0, [], null);

        room.gameState = gameState.waitingForMasterCardSelection;

        return room;
    }

    private distributeCards(room: Room, cards: Card[]) : Object
    {

        let shuffledCards = shuffleArray(cards);

        room.players.forEach(player => {

            player.deck = shuffledCards.slice(0, 6);

        });

        room.stack = shuffledCards;

        return {}
    }

    private sortPlayers(room: Room)
    {
        room.players = shuffleArray(room.players);
    }
}