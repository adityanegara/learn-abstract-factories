"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameFactoryHard = exports.GameFactoryMedium = exports.GameFactoryEasy = void 0;
const Arena_1 = require("./Arena");
const Level_1 = require("./Level");
const Enemy_1 = require("./Enemy");
class GameFactoryEasy {
    createLevel() {
        return new Level_1.LevelEasy();
    }
    createArena() {
        return new Arena_1.ArenaEasy();
    }
    createEnemy() {
        return new Enemy_1.EnemyEasy();
    }
}
exports.GameFactoryEasy = GameFactoryEasy;
class GameFactoryMedium {
    createLevel() {
        return new Level_1.LevelMedium();
    }
    createArena() {
        return new Arena_1.ArenaMedium();
    }
    createEnemy() {
        return new Enemy_1.EnemyMedium();
    }
}
exports.GameFactoryMedium = GameFactoryMedium;
class GameFactoryHard {
    createLevel() {
        return new Level_1.LevelHard();
    }
    createArena() {
        return new Arena_1.ArenaHard();
    }
    createEnemy() {
        return new Enemy_1.EnemyHard();
    }
}
exports.GameFactoryHard = GameFactoryHard;
