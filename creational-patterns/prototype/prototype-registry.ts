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

class PrototypeRegistry<T> {
  private prototypes: Map<string, T> = new Map();

  registerPrototype(name: string, prototype: T): void {
    this.prototypes.set(name, prototype);
  }

  unregisterPrototype(name: string): void {
    this.prototypes.delete(name);
  }

  getPrototype(name: string): T | undefined {
    return this.prototypes.get(name);
  }
}

const prototypeRegistry = new PrototypeRegistry<ShapePrototype>();
prototypeRegistry.registerPrototype('PrototypeDot1', new Dot('Dot1', { x: 10, y: 20 }, 'red'));
prototypeRegistry.registerPrototype('PrototypeRectangle1', new Rectangle('Rectangle1', { x: 30, y: 40 }, 'blue', 100, 200));
prototypeRegistry.registerPrototype('PrototypeCircle1', new Circle('Circle1', { x: 50, y: 60 }, 'green', 70));

const dot2 = prototypeRegistry.getPrototype('PrototypeDot1')?.clone('Dot2') ?? new Dot('NewDot2');
const dot3 = prototypeRegistry.getPrototype('PrototypeDot9')?.clone('Dot3') ?? new Dot('NewDot3');
dot2.draw();
dot3.draw();
dot3.moveTo({ x: 11, y: 21 });
dot3.draw();
const rectangle2 = prototypeRegistry.getPrototype('PrototypeRectangle1')?.clone('Rectangle2') ?? new Rectangle('NewRectangle2');
const circle2 = prototypeRegistry.getPrototype('PrototypeCircle1')?.clone('Circle2') ?? new Circle('NewCircle2');
rectangle2.draw();
circle2.draw();

// > node prototype-registry.ts

// Output:
// Drawing a dot "Dot2" at (10, 20), color red.
// Drawing a dot "NewDot3" at (0, 0), color white.
// Moved NewDot3 to new coordinates: (11, 21)
// Drawing a dot "NewDot3" at (11, 21), color white.
// Drawing a rectangle "Rectangle2" at (30, 40), width 100, height 200, color blue.
// Drawing a circle "Circle2" at (50, 60), radius 70, color green.
