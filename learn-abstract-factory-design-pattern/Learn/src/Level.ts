import Level from "./interfaces/ILevel";

class LevelEasy implements Level
{
    start(): void {
        console.log("Level Easy");
    }
}

class LevelMedium implements Level
{
    start(): void {
        console.log("Level Medium")
    }
}

class LevelHard implements Level
{
    start(): void {
        console.log("Level Hard");
    }
}

export { LevelEasy, LevelMedium, LevelHard }