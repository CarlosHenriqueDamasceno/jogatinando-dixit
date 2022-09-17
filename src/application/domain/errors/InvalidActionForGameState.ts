export default class InvalidActionForGameState extends Error{

    constructor(){
        super("Esta ação não é valida para o momento do jogo.");
    }
}