interface Description {
  description: string;
}

interface Builder<T> {
  reset(): this;
  setBedrooms(rooms: number): this;
  setBathrooms(bathrooms: number): this;
  setFloors(floors: number): this;
  addGarage(): this;
  addSwimmingPool(): this;
  build(): T;
}

class House implements Description {
  bedrooms: number = 0;
  bathrooms: number = 0;
  floors: number = 1;
  garage: boolean = false;
  swimmingPool: boolean = false;
  description: string = '';
}

class HouseBuilder implements Builder<House> {
  private house: House;

  constructor() {
    this.reset();
  }

  reset(): this {
    this.house = new House();
    return this;
  }

  setBedrooms(bedrooms: number): this {
    this.house.bedrooms = bedrooms;
    return this;
  }

  setBathrooms(bathrooms: number): this {
    this.house.bathrooms = bathrooms;
    return this;
  }

  setFloors(floors: number): this {
    this.house.floors = floors;
    return this;
  }

  addGarage(): this {
    this.house.garage = true;
    return this;
  }

  addSwimmingPool(): this {
    this.house.swimmingPool = true;
    return this;
  }

  build(): House {
    return this.house;
  }
}

class HouseDescriptionBuilder implements Builder<Description> {
  private houseDescription: Description;
  private houseDescriptionParts: string[] = ['', '', '', '', '', ''];

  constructor() {
    this.reset();
  }

  reset(): this {
    this.houseDescription = { description: '' };
    this.houseDescriptionParts[0] = 'This is a single-storey house';
    this.houseDescription.description = this.createDescriptionText();
    return this;
  }

  setFloors(floors: number): this {
    if (floors > 1) {
      this.houseDescriptionParts[0] = 'This is a multi-storey house';
      this.houseDescriptionParts[1] = `, with ${floors} floor${floors > 1 ? 's' : ''}`;
    }
    this.houseDescription.description = this.createDescriptionText();
    return this;
  }

  setBedrooms(bedrooms: number): this {
    if (bedrooms > 0) {
      this.houseDescriptionParts[2] = `, with ${bedrooms} bedroom${bedrooms > 1 ? 's' : ''}`;
      this.houseDescription.description = this.createDescriptionText();
    }
    return this;
  }

  setBathrooms(bathrooms: number): this {
    if (bathrooms > 0) {
      this.houseDescriptionParts[3] = `, with ${bathrooms} bathroom${bathrooms > 1 ? 's' : ''}`;
      this.houseDescription.description = this.createDescriptionText();
    }
    return this;
  }

  addGarage(): this {
    this.houseDescriptionParts[4] = ', with garage';
    this.houseDescription.description = this.createDescriptionText();
    return this;
  }

  addSwimmingPool(): this {
    this.houseDescriptionParts[5] = ', with swimming pool';
    this.houseDescription.description = this.createDescriptionText();
    return this;
  }

  build(): Description {
    return this.houseDescription;
  }

  private createDescriptionText(): string {
    let description = this.houseDescriptionParts.join('');
    const commaCount = (description.match(/,/g) || []).length;

    if (commaCount > 1) {
      description = description.replace(/,([^,]*)$/, ', and$1');
    }

    return `${description}.`;
  }
}

class Director {
  constructMiniHouse<T>(builder: Builder<T>): T {
    return builder
      .reset()
      .setBathrooms(1)
      .build();
  }

  constructSmallHouse<T>(builder: Builder<T>): T {
    return builder
      .reset()
      .setBedrooms(2)
      .setBathrooms(1)
      .addGarage()
      .build();
  }

  constructLargeHouse<T>(builder: Builder<T>): T {
    return builder
      .reset()
      .setBedrooms(5)
      .setBathrooms(3)
      .setFloors(2)
      .addGarage()
      .addSwimmingPool()
      .build();
  }
}

const director = new Director();
const houseBuilder = new HouseBuilder();
const houseDescriptionBuilder = new HouseDescriptionBuilder();

const miniHouse = director.constructMiniHouse(houseBuilder);
miniHouse.description = director.constructMiniHouse(houseDescriptionBuilder).description;

const smallHouse = director.constructSmallHouse(houseBuilder);
smallHouse.description = director.constructSmallHouse(houseDescriptionBuilder).description;

const largeHouse = director.constructLargeHouse(houseBuilder);
largeHouse.description = director.constructLargeHouse(houseDescriptionBuilder).description;

console.table(miniHouse);
console.table(smallHouse);
console.table(largeHouse);

// > node builder.ts

// Output:
// ┌──────────────┬───────────────────────────────────────────────────┐
// │ (index)      │ Values                                            │
// ├──────────────┼───────────────────────────────────────────────────┤
// │ bedrooms     │ 0                                                 │
// │ bathrooms    │ 1                                                 │
// │ floors       │ 1                                                 │
// │ garage       │ false                                             │
// │ swimmingPool │ false                                             │
// │ description  │ 'This is a single-storey house, with 1 bathroom.' │
// └──────────────┴───────────────────────────────────────────────────┘
// ┌──────────────┬─────────────────────────────────────────────────────────────────────────────────────┐
// │ (index)      │ Values                                                                              │
// ├──────────────┼─────────────────────────────────────────────────────────────────────────────────────┤
// │ bedrooms     │ 2                                                                                   │
// │ bathrooms    │ 1                                                                                   │
// │ floors       │ 1                                                                                   │
// │ garage       │ true                                                                                │
// │ swimmingPool │ false                                                                               │
// │ description  │ 'This is a single-storey house, with 2 bedrooms, with 1 bathroom, and with garage.' │
// └──────────────┴─────────────────────────────────────────────────────────────────────────────────────┘
// ┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │ (index)      │ Values                                                                                                                 │
// ├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
// │ bedrooms     │ 5                                                                                                                      │
// │ bathrooms    │ 3                                                                                                                      │
// │ floors       │ 2                                                                                                                      │
// │ garage       │ true                                                                                                                   │
// │ swimmingPool │ true                                                                                                                   │
// │ description  │ 'This is a multi-storey house, with 2 floors, with 5 bedrooms, with 3 bathrooms, with garage, and with swimming pool.' │
// └──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
