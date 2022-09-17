import { GameObject, Rect, ImageObject } from "./gameObjects";
declare class Renderer extends HTMLCanvasElement {
    constructor();
    ctx: CanvasRenderingContext2D;
    private frame;
    frameFunction: () => 0 | 1;
    clear(): void;
    drawImage(image: ImageObject): void;
    draw(shape: GameObject): void;
    animation(frame: () => 0 | 1, clearOnStart: boolean, onstop?: () => void): void;
    private animationFunction;
    stopAnimation(): void;
}
export { Renderer, Rect, GameObject, ImageObject };