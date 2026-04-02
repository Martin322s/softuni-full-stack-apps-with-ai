export interface Point {
  x: number;
  y: number;
}

export interface Bounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface GameObject {
  location: Point;
  speed: number;
  move(): void;
  getBounds(): Bounds;
  hasCollision(other: GameObject): boolean;
}
