

import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';

// Создаем новый экземпляр игры и запускаем его
const game = new Game();
game.start();

// В дальнейшем можно использовать loadGame и saveGame
