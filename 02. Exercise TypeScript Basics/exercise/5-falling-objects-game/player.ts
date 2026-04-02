import { Bounds, Point } from "./interfaces";

class Player {
  location: Point;
  width: number;
  height: number;
  color: string;
  borderColor: string;
  speed: number;

  constructor(
    location: Point,
    width: number,
    height: number,
    color: string,
    borderColor: string,
    speed: number = 20,
  ) {
    this.location = location;
    this.width = width;
    this.height = height;
    this.color = color;
    this.borderColor = borderColor;
    this.speed = speed;
  }

  moveLeft(): void {
    this.location.x -= this.speed;
  }

  moveRight(): void {
    this.location.x += this.speed;
  }

  getBounds(): Bounds {
    return {
      x: this.location.x,
      y: this.location.y,
      width: this.width,
      height: this.height,
    };
  }
}

export default Player;
