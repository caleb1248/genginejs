declare class GameObject {
  constructor(x: number, y: number);
  x: number;
  y: number;
  move(xy: number[]): void;
  moveAtAngle(angle: number, speed: number): void;
  customDraw?: (ctx: CanvasRenderingContext2D) => void;
}

declare class ImageObject extends GameObject {
  constructor(x: number, y: number, src: HTMLImageElement);
  src: HTMLImageElement;
}

declare class Rect extends GameObject {
  constructor(x: number, y: number, width: number, height: number, color: string);
  width: number;
  height: number;
  color: string;
  collision(rect: Rect): boolean;
}

declare class Circle extends GameObject {
  constructor(x: number, y: number, radius: number, color: string);
  color: string;
  radius: number;
}

export { GameObject, Rect, Circle, ImageObject };