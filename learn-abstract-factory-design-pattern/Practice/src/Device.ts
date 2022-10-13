import Device from "./interfeces/iDevice";

class Phone implements Device{

    widhtInCM: number = 14.7;

    heightInCM: number = 20;

    bootUp():void
    {
        console.log('Phone booting up');
    }

    shutDown():void
    {
        console.log('Phone shutting down');
    }

    takingPicture(): void {
        console.log('Phoen taking picture');
    }
}

class Tablet implements Device{

    widhtInCM: number = 21.49;

    heightInCM: number = 28.06;

    bootUp():void
    {
        console.log('Tablet booting up');
    }

    shutDown():void
    {
        console.log('Tablet shutting down');
    }
    
    takingPicture(): void {
        console.log('Tablet taking picture');
    }
}

class Laptop implements Device{

    widhtInCM: number = 30.41;

    heightInCM: number = 21.24;

    bootUp():void
    {
        console.log('Laptop booting up');
    }

    shutDown():void
    {
        console.log('Laptop shutting down');
    }
    
    takingPicture(): void {
        console.log('Laptop taking picture');
    }
}

export { Phone, Tablet, Laptop }