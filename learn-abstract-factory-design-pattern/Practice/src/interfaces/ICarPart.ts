import CarDoor from "./ICarDoor";

interface CarPart{
    getLeftDoor():CarDoor,
    getRightDoor():CarDoor,
}

export default CarPart;