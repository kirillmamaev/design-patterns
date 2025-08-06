interface Prototype {
  clone: (newName: string) => Prototype;
}

interface Coordinates {
  x: number;
  y: number;
}

interface ShapePrototype extends Prototype {
  moveTo(newCoordinates: Coordinates): void;
  draw(): void;
  clone: (newName: string) => ShapePrototype;
}

class Dot implements ShapePrototype {
  protected name: string;
  protected coordinates: Coordinates;
  protected color: string;

  constructor(
    name: string,
    coordinates: Coordinates = { x: 0, y: 0 },
    color: string = 'white'
  ) {
    this.name = name;
    this.coordinates = { ...coordinates };
    this.color = color;
  }

  moveTo(newCoordinates: Coordinates): void {
    this.coordinates = { ...newCoordinates };
    console.log(`Moved ${this.name} to new coordinates: (${this.coordinates.x}, ${this.coordinates.y})`);
  }

  draw(): void {
    console.log(`Drawing a dot "${this.name}" at (${this.coordinates.x}, ${this.coordinates.y}), color ${this.color}.`);
  }

  clone(newName: string): Dot {
    return new Dot(newName, this.coordinates, this.color);
  }
}

class Rectangle extends Dot {
  private width: number;
  private height: number;

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

  draw(): void {
    console.log(`Drawing a rectangle "${this.name}" at (${this.coordinates.x}, ${this.coordinates.y}), width ${this.width}, height ${this.height}, color ${this.color}.`);
  }

  clone(newName: string): Rectangle {
    return new Rectangle(newName, this.coordinates, this.color, this.width, this.height);
  }
}

class Circle extends Dot {
  private radius: number;

  constructor(
    name: string,
     coordinates: Coordinates = { x: 0, y: 0 },
      color: string = 'white',
       radius: number = 0) {
    super(name, coordinates, color);
    this.radius = radius;
  }

  draw(): void {
    console.log(`Drawing a circle "${this.name}" at (${this.coordinates.x}, ${this.coordinates.y}), radius ${this.radius}, color ${this.color}.`);
  }

  clone(newName: string): Circle {
    return new Circle(newName, this.coordinates, this.color, this.radius);
  }
}

const Dot1 = new Dot('Dot 1', { x: 10, y: 20 }, 'red');
const Dot2 = Dot1.clone('Dot 2');
const Rectangle1 = new Rectangle('Rectangle 1', { x: 30, y: 40 }, 'blue', 100, 50);
const Rectangle2 = Rectangle1.clone('Rectangle 2');
const Circle1 = new Circle('Circle 1', { x: 50, y: 60 }, 'green', 25);
const Circle2 = Circle1.clone('Circle 2');

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
// Drawing a dot "Dot 1" at (10, 20), color red.
// Drawing a rectangle "Rectangle 1" at (30, 40), width 100, height 50, color blue.
// Drawing a circle "Circle 1" at (50, 60), radius 25, color green.
// Moved Dot 1 to new coordinates: (110, 120)
// Moved Rectangle 1 to new coordinates: (230, 240)
// Moved Circle 1 to new coordinates: (350, 360)
// Drawing a dot "Dot 1" at (110, 120), color red.
// Drawing a dot "Dot 2" at (10, 20), color red.
// Drawing a rectangle "Rectangle 1" at (230, 240), width 100, height 50, color blue.
// Drawing a rectangle "Rectangle 2" at (30, 40), width 100, height 50, color blue.
// Drawing a circle "Circle 1" at (350, 360), radius 25, color green.
// Drawing a circle "Circle 2" at (50, 60), radius 25, color green.
