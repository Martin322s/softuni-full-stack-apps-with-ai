import checkCollision from "./collision-check";
import { Bounds, GameObject, Point } from "./interfaces";

class FallingCircle implements GameObject {
  location: Point;
  speed: number;
  radius: number;
  color: string;
  borderColor: string;

  constructor(
    location: Point,
    speed: number,
    radius: number,
    color: string,
    borderColor: string,
  ) {
    this.location = location;
    this.speed = speed;
    this.radius = radius;
    this.color = color;
    this.borderColor = borderColor;
  }

  move(): void {
    this.location.y += this.speed;
  }

  getBounds(): Bounds {
    return {
      x: this.location.x - this.radius,
      y: this.location.y - this.radius,
      width: this.radius * 2,
      height: this.radius * 2,
    };
  }

  hasCollision(other: GameObject): boolean {
    return checkCollision(this.getBounds(), other.getBounds());
  }
}

export default FallingCircle;