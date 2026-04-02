import checkCollision from "./collision-check";
import GameField from "./game-field";
import Player from "./player";

class Game {
  field: GameField;
  player: Player;
  isGameOver: boolean;

  constructor() {
    this.field = new GameField(800, 500);
    this.player = new Player({ x: 370, y: 450 }, 60, 30, "blue", "black");
    this.isGameOver = false;
  }

  update(): void {
    for (const obj of this.field.gameObjects) {
      obj.move();

      if (checkCollision(obj.getBounds(), this.player.getBounds())) {
        this.isGameOver = true;
      }
    }

    this.field.removeOffscreenObjects();
  }
}

export default Game;
