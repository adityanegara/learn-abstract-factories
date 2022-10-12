import CarDoor from "./interfaces/ICarDoor";

class HondaRightDoor implements CarDoor{
    makePart(): string {
        return 'Im Honda Right Door!'
    }
}

class HondaLeftDoor implements CarDoor{
    makePart(): string {
        return 'Im Honda Left Door!'
    }
}

class MazdaRightDoor implements CarDoor{
    makePart(): string {
        return `Im Mazda Right Door!`;
    }
}

class MazdaLeftDoor implements CarDoor{
    makePart(): string {
        return `Im Mazda Left Door!`
    }
}

export {HondaLeftDoor, HondaRightDoor, MazdaLeftDoor, MazdaRightDoor}