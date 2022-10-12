import { GameFactoryEasy, GameFactoryMedium, GameFactoryHard } from "./GameFactory";
import Game from "./Game";

const gameEasy = new Game(new GameFactoryEasy());
const gameMedium = new Game(new GameFactoryMedium());
const gameHard = new Game(new GameFactoryHard());

gameEasy.start();
gameMedium.start();
gameHard.start();