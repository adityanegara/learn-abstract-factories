export default interface Device
{ 
    widhtInCM: number,
    heightInCM: number,
    bootUp():void,
    shutDown():void,
    takingPicture():void,
}
