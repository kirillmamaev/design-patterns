interface Prototype {
  clone: (newName: string) => Prototype;
}

interface Coordinates {
  x: number;
  y: number;
}

class Dot implements Prototype {
  protected x: number = 0;
  protected y: number = 0;
  protected _color: string = 'white';
  protected _name: string = '';

  constructor(name: string, coordinates: Coordinates = { x: 0, y: 0 }, color: string = 'white') {
    this._name = name;
    this.x = coordinates.x;
    this.y = coordinates.y;
    this._color = color;
  }

  clone(newName: string): Dot {
    return new Dot(newName, { x: this.x, y: this.y }, this._color);
  }

  moveTo(newCoordinates: Coordinates): void {
    this.x = newCoordinates.x;
    this.y = newCoordinates.y;
    console.log(`Moved ${this._name} to new coordinates: (${this.x}, ${this.y})`);
  }

  draw(): void {
    console.log(`Drawing a dot "${this._name}" at (${this.x}, ${this.y}), color ${this._color}.`);
  }
}

class Rectangle extends Dot {
  private width: number = 0;
  private height: number = 0;

  constructor(
    name: string,
    coordinates: Coordinates = { x: 0, y: 0 },
    color: string = 'white',
    width: number = 0,
    height: number = 0,
  ) {
    super(name, coordinates, color);
    this.width = width;
    this.height = height;
  }

  clone(newName: string): Rectangle {
    return new Rectangle(newName, { x: this.x, y: this.y }, this._color, this.width, this.height);
  }

  draw(): void {
    console.log(
      `Drawing a rectangle "${this._name}" at (${this.x}, ${this.y}), width ${this.width}, height ${this.height}, color ${this._color}.`,
    );
  }
}

class Circle extends Dot {
  private radius: number = 0;

  constructor(name: string, coordinates: Coordinates = { x: 0, y: 0 }, color: string = 'white', radius: number = 0) {
    super(name, coordinates, color);
    this.radius = radius;
  }

  clone(newName: string): Circle {
    return new Circle(newName, { x: this.x, y: this.y }, this._color, this.radius);
  }

  draw(): void {
    console.log(
      `Drawing a circle "${this._name}" at (${this.x}, ${this.y}), radius ${this.radius}, color ${this._color}.`,
    );
  }
}

const Dot1 = new Dot('Dot 01', { x: 10, y: 20 }, 'red');
const Dot2 = Dot1.clone('Dot 02');
const Rectangle1 = new Rectangle('Rectangle 01', { x: 30, y: 40 }, 'blue', 100, 50);
const Rectangle2 = Rectangle1.clone('Rectangle 02');
const Circle1 = new Circle('Circle 01', { x: 50, y: 60 }, 'green', 25);
const Circle2 = Circle1.clone('Circle 02');

Dot1.draw();
Rectangle1.draw();
Circle1.draw();

Dot1.moveTo({ x: 110, y: 120 });
Rectangle1.moveTo({ x: 230, y: 240 });
Circle1.moveTo({ x: 350, y: 360 });

Dot1.draw();
Dot2.draw();
Rectangle1.draw();
Rectangle2.draw();
Circle1.draw();
Circle2.draw();

// > node prototype.ts

// Output:
// Drawing a dot "Dot 01" at (10, 20), color red.
// Drawing a rectangle "Rectangle 01" at (30, 40), width 100, height 50, color blue.
// Drawing a circle "Circle 01" at (50, 60), radius 25, color green.
// Moved Dot 01 to new coordinates: (110, 120)
// Moved Rectangle 01 to new coordinates: (230, 240)
// Moved Circle 01 to new coordinates: (350, 360)
// Drawing a dot "Dot 01" at (110, 120), color red.
// Drawing a dot "Dot 02" at (10, 20), color red.
// Drawing a rectangle "Rectangle 01" at (230, 240), width 100, height 50, color blue.
// Drawing a rectangle "Rectangle 02" at (30, 40), width 100, height 50, color blue.
// Drawing a circle "Circle 01" at (350, 360), radius 25, color green.
// Drawing a circle "Circle 02" at (50, 60), radius 25, color green.
