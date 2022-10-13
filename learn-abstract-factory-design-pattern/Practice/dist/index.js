"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SmartDeviceFactory_1 = require("./SmartDeviceFactory");
const SmartDevice_1 = __importDefault(require("./SmartDevice"));
const samsungGalaxyA22 = new SmartDevice_1.default(new SmartDeviceFactory_1.SamsungGalaxyS22());
const ipadPro = new SmartDevice_1.default(new SmartDeviceFactory_1.IPadPro());
const macbook = new SmartDevice_1.default(new SmartDeviceFactory_1.Macbook());
samsungGalaxyA22.testingFunctionalities();
ipadPro.testingFunctionalities();
macbook.testingFunctionalities();
