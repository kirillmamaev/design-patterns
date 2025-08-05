interface Factory {
  createProductA(): ProductA;
  createProductB(): ProductB;
}

interface ProductA {
  getString(): string;
}

interface ProductB {
  getString(): string;
}

class CapitalCaseFactory implements Factory {
  createProductA(): ProductA {
    return new CapitalCaseProductA();
  }

  createProductB(): ProductB {
    return new CapitalCaseProductB();
  }
}

class LowerCaseFactory implements Factory {
  createProductA(): ProductA {
    return new LowerCaseProductA();
  }

  createProductB(): ProductB {
    return new LowerCaseProductB();
  }
}

class CapitalCaseProductA implements ProductA {
  getString(): string {
    return 'CAPITAL CASE PRODUCT A';
  }
}

class LowerCaseProductA implements ProductA {
  getString(): string {
    return 'lower case product a';
  }
}

class CapitalCaseProductB implements ProductB {
  getString(): string {
    return 'CAPITAL CASE PRODUCT B';
  }
}

class LowerCaseProductB implements ProductB {
  getString(): string {
    return 'lower case product b';
  }
}

class App {
  private factory: Factory;

  constructor(factory: Factory) {
    this.factory = factory;
  }

  run(): void {
    const productA = this.factory.createProductA();
    const productB = this.factory.createProductB();

    console.log(productA.getString());
    console.log(productB.getString());
  }
}

class AppConfigurator {
  static configure(factoryType: 'capital' | 'lower'): App {
    let factory: Factory;

    if (factoryType === 'capital') {
      factory = new CapitalCaseFactory();
    } else {
      factory = new LowerCaseFactory();
    }

    return new App(factory);
  }
}

const appCapitalCase = AppConfigurator.configure('capital');
appCapitalCase.run();

const appLowerCase = AppConfigurator.configure('lower');
appLowerCase.run();

// > node abstract-factory.ts

// Output:
// CAPITAL CASE PRODUCT A
// CAPITAL CASE PRODUCT B
// lower case product a
// lower case product b
