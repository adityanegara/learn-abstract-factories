"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameFactory_1 = require("./GameFactory");
const Game_1 = __importDefault(require("./Game"));
const gameEasy = new Game_1.default(new GameFactory_1.GameFactoryEasy());
const gameMedium = new Game_1.default(new GameFactory_1.GameFactoryMedium());
const gameHard = new Game_1.default(new GameFactory_1.GameFactoryHard());
gameEasy.start();
gameMedium.start();
gameHard.start();
