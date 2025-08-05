interface Product {
  getString(): string;
}

class ConcreteProductA implements Product {
  getString(): string {
    return 'Product A';
  }
}

class ConcreteProductB implements Product {
  getString(): string {
    return 'Product B';
  }
}

abstract class Creator {
  abstract factoryMethod(): Product;

  createProduct(): Product {
    const product = this.factoryMethod();
    return product;
  }
}

class ConcreteCreatorA extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductA();
  }
}

class ConcreteCreatorB extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductB();
  }
}

const creatorA = new ConcreteCreatorA();
const creatorB = new ConcreteCreatorB();

const products: Product[] = [];

for (let i = 0; i < 6; i++) {
  if (i % 2 === 0) {
    products.push(creatorA.createProduct());
  } else {
    products.push(creatorB.createProduct());
  }
}

console.log(products.map((product) => product.getString()).join(', '));
// > node factory-method.ts
// Product A, Product B, Product A, Product B, Product A, Product B
