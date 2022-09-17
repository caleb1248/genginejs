class GameObject {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }
  move(xy) {
      this.x += xy[0];
      this.y += xy[1];
  }
  moveAtAngle(angle, speed) {
      this.move([Math.cos(angle) * speed, Math.sin(angle) * speed]);
  }
}
class ImageObject extends GameObject {
  constructor(x, y, src) {
      super(x, y);
      this.src = src;
  }
}
class Rect extends GameObject {
  constructor(x, y, width, height, color) {
      super(x, y);
      this.width = width;
      this.height = height;
      this.color = color;
  }
  collision(rect) {
      if (this.x < rect.x + rect.width && this.x + this.width > rect.x)
          if (this.y < rect.y + rect.height && this.y + this.height > rect.y)
              return true;
      return false;
  }
}
class Circle extends GameObject {
  constructor(x, y, radius, color) {
      super(x, y);
      this.radius = radius;
      this.color = color;
  }
}
export { GameObject, Rect, Circle, ImageObject };