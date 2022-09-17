import { GameObject, Rect, Circle, ImageObject } from "./gameObjects";
class Renderer extends HTMLCanvasElement {
    constructor() {
        super();
        this.frameFunction = () => 0;
        this.ctx = this.getContext("2d");
        this.frame = 0;
    }
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
    drawImage(image) {
        this.ctx.drawImage(image.src, image.x, image.y);
    }
    draw(shape) {
        if (typeof shape.customDraw != "undefined") {
            shape.customDraw(this.ctx);
        }
        else if (shape instanceof Rect) {
            this.ctx.fillStyle = shape.color;
            this.ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
        }
        else if (shape instanceof Circle) {
            this.ctx.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI, false);
        }
    }
    animation(frame, clearOnStart, onstop) {
        this.frameFunction = frame;
        this.animationFunction(clearOnStart, onstop);
    }
    animationFunction(clearOnStart, onstop) {
        if (clearOnStart)
            this.ctx.clearRect(0, 0, this.width, this.height);
        const result = this.frameFunction();
        if (result == 0) {
            requestAnimationFrame(this.animationFunction.bind(this, clearOnStart, onstop));
        }
        else if (result === 1) {
            cancelAnimationFrame(this.frame);
            if (typeof onstop !== "undefined")
                onstop();
        }
    }
    stopAnimation() {
        cancelAnimationFrame(this.frame);
    }
}
customElements.define("render-area", Renderer, { extends: "canvas" });
export { Renderer, Rect, GameObject, ImageObject };