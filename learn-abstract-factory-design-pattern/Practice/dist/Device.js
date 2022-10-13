"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Laptop = exports.Tablet = exports.Phone = void 0;
class Phone {
    constructor() {
        this.widhtInCM = 14.7;
        this.heightInCM = 20;
    }
    bootUp() {
        console.log('Phone booting up');
    }
    shutDown() {
        console.log('Phone shutting down');
    }
    takingPicture() {
        console.log('Phoen taking picture');
    }
}
exports.Phone = Phone;
class Tablet {
    constructor() {
        this.widhtInCM = 21.49;
        this.heightInCM = 28.06;
    }
    bootUp() {
        console.log('Tablet booting up');
    }
    shutDown() {
        console.log('Tablet shutting down');
    }
    takingPicture() {
        console.log('Tablet taking picture');
    }
}
exports.Tablet = Tablet;
class Laptop {
    constructor() {
        this.widhtInCM = 30.41;
        this.heightInCM = 21.24;
    }
    bootUp() {
        console.log('Laptop booting up');
    }
    shutDown() {
        console.log('Laptop shutting down');
    }
    takingPicture() {
        console.log('Laptop taking picture');
    }
}
exports.Laptop = Laptop;
