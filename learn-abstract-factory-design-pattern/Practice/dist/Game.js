"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
    constructor(gameFactory) {
        this._level = gameFactory.createLevel();
        this._arena = gameFactory.createArena();
        this._enemy = gameFactory.createEnemy();
    }
    start() {
        this._level.start();
        this._arena.start();
        this._enemy.start();
    }
}
exports.default = Game;
