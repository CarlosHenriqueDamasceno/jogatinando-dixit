import Room from "../entities/Room";
import RoomRepository from "../../infra/repositories/firebase/RoomRepository";

export default class CreateRoomUseCase{

    roomRepository: RoomRepository;

    constructor(roomRepository: RoomRepository){
        this.roomRepository = roomRepository;
    }

    execute(ownerName: string)
    {
        let room = new Room(
            null,
            {

            }
        );
    }

}