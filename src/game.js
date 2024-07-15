// game.js
// Импортируем класс Character из модуля domain
import Character from './domain.js';

// Определяем класс Game
class Game {
  start() {
    console.log('game started');
  }
}

// Определяем класс GameSavingData
class GameSavingData {
  // логика сохранения игры
}

// Определяем функции для чтения и записи сохранений игры
function readGameSaving() {
  // логика чтения сохранения игры
}

function writeGameSaving() {
  // логика записи сохранения игры
}

// Экспортируем Game как значение по умолчанию
// Экспортируем GameSavingData, readGameSaving и writeGameSaving как именованные экспорты
export default Game;
export { GameSavingData, readGameSaving, writeGameSaving };
