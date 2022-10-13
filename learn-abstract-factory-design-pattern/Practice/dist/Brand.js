"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandSamsung = exports.BrandApple = void 0;
class BrandApple {
    constructor() {
        this.name = 'Apple';
        this.description = "Apple Inc. adalah perusahaan teknologi multinasional yang berpusat di Cupertino, California, yang merancang, mengembangkan, dan menjual barang elektronik konsumen, perangkat lunak komputer, dan layanan daring";
        this.yearFounded = 1976;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getYearFounded() {
        return this.yearFounded;
    }
}
exports.BrandApple = BrandApple;
class BrandSamsung {
    constructor() {
        this.name = 'Samsung';
        this.description = "The Samsung Group is a South Korean multinational manufacturing conglomerate headquartered in Samsung Town, Seoul, South Korea.";
        this.yearFounded = 1969;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getYearFounded() {
        return this.yearFounded;
    }
}
exports.BrandSamsung = BrandSamsung;
