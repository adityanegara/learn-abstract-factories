"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmartDevice {
    constructor(smartDeviceFactory) {
        this._brand = smartDeviceFactory.createBrand();
        this._device = smartDeviceFactory.createDevice();
    }
    testingFunctionalities() {
        console.log(this._brand.getName());
        console.log(this._brand.getDescription());
        console.log(this._brand.getYearFounded());
        this._device.bootUp();
        this._device.takingPicture();
        this._device.shutDown();
    }
}
exports.default = SmartDevice;
