import { HondaLeftDoor, HondaRightDoor, MazdaLeftDoor, MazdaRightDoor } from "./CarDoor";
import CarDoor from "./interfaces/ICarDoor";
import CarPart from "./interfaces/ICarPart";

class HondaFactory implements CarPart{
    getLeftDoor(): CarDoor {
        return new HondaLeftDoor();
    }

    getRightDoor(): CarDoor {
        return new HondaRightDoor();
    }
}

class MazdaFactory implements CarPart{
    getLeftDoor(): CarDoor {
        return new MazdaLeftDoor();
    }

    getRightDoor(): CarDoor {
        return new MazdaRightDoor();
    }
}

export {HondaFactory, MazdaFactory};