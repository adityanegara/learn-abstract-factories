import Enemy from "./interfaces/IEnemy";

class EnemyEasy implements Enemy
{
    start(): void {
        console.log("Enemy Easy");
    }
}

class EnemyMedium implements Enemy
{
    start(): void {
        console.log("Enemy Medium")
    }
}

class EnemyHard implements Enemy
{
    start(): void {
        console.log("Enemy Hard");
    }
}

export { EnemyEasy, EnemyMedium, EnemyHard }