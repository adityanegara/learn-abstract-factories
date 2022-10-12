import Arena from "./interfaces/IArena";
import Level from "./interfaces/ILevel";
import GameFactory from "./GameFactory";
import Enemy from "./interfaces/IEnemy";

class Game
{
    private _level: Level;
    private _arena: Arena;
    private _enemy: Enemy;
    constructor(gameFactory: GameFactory){
        this._level = gameFactory.createLevel();
        this._arena = gameFactory.createArena();
        this._enemy = gameFactory.createEnemy();
    }

    start():void
    {
        this._level.start();
        this._arena.start();
        this._enemy.start();
    }
}

export default Game;