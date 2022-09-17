import { GameStatus } from "../../types/GameStatus"

export default interface RoomRepositoryInterface{

    updateStatus(roomId:string, status:GameStatus) : void
    updateStack(roomId:string, stack:Array<string>) : void
    updatePlayersOrder(roomId:string, playersOrder:Array<string>) : void

}