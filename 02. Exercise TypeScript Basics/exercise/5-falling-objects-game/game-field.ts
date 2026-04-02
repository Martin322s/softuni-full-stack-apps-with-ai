import { GameObject } from "./interfaces";

class GameField {
  width: number;
  height: number;
  gameObjects: GameObject[];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.gameObjects = [];
  }

  addObject(obj: GameObject): void {
    this.gameObjects.push(obj);
  }

  removeOffscreenObjects(): void {
    this.gameObjects = this.gameObjects.filter(
      (obj) => obj.location.y < this.height + 100,
    );
  }
}

export default GameField;
