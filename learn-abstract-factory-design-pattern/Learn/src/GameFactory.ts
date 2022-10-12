import { ArenaEasy, ArenaMedium, ArenaHard } from "./Arena";
import { LevelEasy, LevelMedium, LevelHard } from "./Level";
import Arena from "./interfaces/IArena";
import Level from "./interfaces/ILevel";
import Enemy from "./interfaces/IEnemy";
import { EnemyEasy, EnemyHard, EnemyMedium } from "./Enemy";


interface GameFactory
{
     createLevel():Level,
     createArena():Arena,
     createEnemy():Enemy,
}

class GameFactoryEasy implements GameFactory
{
    createLevel(): Level {
        return new LevelEasy();
    }
    createArena(): Arena {
        return new ArenaEasy();
    }
    createEnemy(): Enemy {
        return new EnemyEasy();
    }
}

class GameFactoryMedium implements GameFactory
{
    createLevel(): Level {
        return new LevelMedium();
    }
    createArena(): Arena {
        return new ArenaMedium();
    }
    createEnemy(): Enemy {
        return new EnemyMedium();
    }
}

class GameFactoryHard implements GameFactory
{
    createLevel(): Level {
        return new LevelHard();
    }
    createArena(): Arena {
        return new ArenaHard();
    }
    createEnemy(): Enemy {
        return new EnemyHard();
    }
}

export default GameFactory;
export { GameFactoryEasy, GameFactoryMedium, GameFactoryHard}