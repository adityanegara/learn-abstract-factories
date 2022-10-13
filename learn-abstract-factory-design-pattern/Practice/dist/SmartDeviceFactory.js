"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Macbook = exports.IPadPro = exports.SamsungGalaxyS22 = void 0;
const Device_1 = require("./Device");
const Brand_1 = require("./Brand");
class SamsungGalaxyS22 {
    createDevice() {
        return new Device_1.Phone;
    }
    createBrand() {
        return new Brand_1.BrandSamsung;
    }
}
exports.SamsungGalaxyS22 = SamsungGalaxyS22;
class IPadPro {
    createDevice() {
        return new Device_1.Tablet;
    }
    createBrand() {
        return new Brand_1.BrandApple;
    }
}
exports.IPadPro = IPadPro;
class Macbook {
    createDevice() {
        return new Device_1.Laptop;
    }
    createBrand() {
        return new Brand_1.BrandApple;
    }
}
exports.Macbook = Macbook;
