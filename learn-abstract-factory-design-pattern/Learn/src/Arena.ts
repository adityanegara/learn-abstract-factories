import Arena from "./interfaces/IArena";

class ArenaEasy implements Arena
{
    start(): void {
        console.log("Arena Easy");
    }
}

class ArenaMedium implements Arena
{
    start(): void {
        console.log("Arena Medium")
    }
}

class ArenaHard implements Arena
{
    start(): void {
        console.log("Arena Hard");
    }
}

export { ArenaEasy, ArenaMedium, ArenaHard }