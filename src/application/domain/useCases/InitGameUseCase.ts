import Game from "../entities/Game";
import CardRepositoryInterface from "../repositories/CardRepositoryInterface";
import GameRepositoryInterface from "../repositories/GameRepositoryInterface";

export default class InitGameUseCase {

    private cardRepository: CardRepositoryInterface;
    private gameRepository: GameRepositoryInterface;

    constructor(gameRepository: GameRepositoryInterface, cardRepository: CardRepositoryInterface){
        this.cardRepository = cardRepository;
        this.gameRepository = gameRepository;
    }

    public execute() : Game
    {
        return this.gameRepository.get();
    }
}