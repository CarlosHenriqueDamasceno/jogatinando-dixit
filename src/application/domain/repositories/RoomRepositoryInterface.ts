import { GameStatus } from "../../types/GameStatus"

export default interface RoomRepositoryInterface{

    updateStatus(roomId:string, status:GameStatus) : void

}