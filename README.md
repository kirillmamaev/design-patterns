# Design Patterns Implementation Examples in TypeScript

This repository contains various design patterns implemented in TypeScript. Each pattern is organised into its own directory with a brief description and example code.

## What's a Design Pattern?

Design patterns are proven solutions to recurring problems in software design. Think of them as customisable blueprints that you can adapt to solve specific design challenges in your code. Unlike ready-made functions or libraries that you can directly copy and use, patterns represent general concepts and approaches rather than specific code implementations.

It's important to understand that patterns are different from algorithms. While an algorithm provides a clear sequence of steps to achieve a specific goal (like a cooking recipe), a pattern is more like an architectural blueprint. It shows you the overall structure and relationships, but the exact implementation details depend on your specific requirements and context.

The same pattern can be implemented differently across various programs while maintaining its core principles and solving the same fundamental problem. This flexibility makes patterns powerful tools for creating maintainable and scalable software solutions.

## Why Use Design Patterns?

Design patterns are essential for several reasons:

- **Reusability**: Patterns encapsulate best practices, allowing you to reuse solutions across different projects.
- **Maintainability**: By following established patterns, your code becomes easier to understand and modify, reducing technical debt.
- **Scalability**: Patterns help you design systems that can grow and adapt over time without requiring major rewrites.
- **Collaboration**: Patterns provide a common vocabulary for developers, making it easier to communicate design ideas and collaborate on projects.

## Classification of Patterns

Design patterns vary in complexity, scope, and applicability. They can be categorised in multiple ways based on their characteristics and intended use.

### By Complexity and Scope

Patterns range from simple, language-specific solutions to complex architectural frameworks:

- **Idioms**: Basic, low-level patterns that typically apply to a single programming language
- **Design Patterns**: Mid-level patterns that solve common design problems and can be applied across different languages
- **Architectural Patterns**: High-level patterns that guide the overall structure of entire applications and systems

### By Purpose and Intent

The most common classification organises patterns into three main categories based on their primary purpose:

### 1. Creational Patterns

These patterns focus on object creation mechanisms, providing flexibility in how objects are instantiated and improving code reusability.

- **Factory Method**: Creates objects without specifying their concrete classes
- **Abstract Factory**: Creates families of related objects without specifying their concrete classes
- **Builder**: Constructs complex objects step by step
- **Prototype**: Creates objects by cloning existing instances
- **Singleton**: Ensures a class has only one instance and provides global access to it

### 2. Structural Patterns

These patterns deal with object composition, explaining how to combine objects and classes into larger structures while maintaining flexibility and efficiency.

- **Adapter**: Allows incompatible interfaces to work together
- **Bridge**: Separates an abstraction from its implementation
- **Composite**: Composes objects into tree structures to represent part-whole hierarchies
- **Decorator**: Adds new functionality to objects dynamically without altering their structure
- **Facade**: Provides a simplified interface to a complex subsystem
- **Flyweight**: Reduces the cost of creating and manipulating a large number of similar objects
- **Proxy**: Provides a placeholder or surrogate for another object to control access to it

### 3. Behavioural Patterns

These patterns focus on communication between objects and the distribution of responsibilities, ensuring effective collaboration and loose coupling.

- **Chain of Responsibility**: Passes requests along a chain of handlers
- **Command**: Encapsulates a request as an object
- **Iterator**: Provides a way to access elements of a collection sequentially
- **Mediator**: Defines how a set of objects interact with each other
- **Memento**: Captures and restores an object's internal state
- **Observer**: Defines a one-to-many dependency between objects
- **State**: Allows an object to alter its behaviour when its internal state changes
- **Strategy**: Defines a family of algorithms and makes them interchangeable
- **Template Method**: Defines the skeleton of an algorithm in a base class
- **Visitor**: Separates algorithms from the objects on which they operate

## Why Should You Learn Design Patterns?

While it's possible to work as a developer for years without explicitly knowing design patterns, understanding them provides significant advantages for your programming career and code quality.

### Essential Benefits

**Toolkit of Proven Solutions**: Design patterns offer a collection of battle-tested solutions to common software design challenges. Even if you don't encounter these exact problems, learning patterns teaches valuable problem-solving approaches using object-oriented design principles.

**Enhanced Communication**: Patterns create a shared vocabulary among developers. When you mention using a "Singleton" or "Observer pattern," your teammates immediately understand the intended structure and behaviour without requiring detailed explanations. This dramatically improves team communication efficiency.

**Professional Growth**: Understanding design patterns is often expected in professional software development environments. They represent industry best practices and demonstrate your commitment to writing maintainable, scalable code.

**Problem Recognition**: Once you know patterns, you'll start recognising recurring problems in your code and automatically think of appropriate solutions. This develops your architectural thinking and design intuition.

**Code Quality**: Patterns promote good design principles such as loose coupling, high cohesion, and separation of concerns, leading to more maintainable and testable code.

**Flexibility and Adaptability**: Patterns encourage you to think about how to structure your code in a way that allows for future changes without significant rewrites. This is crucial in today's fast-paced development environments where requirements can change rapidly.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
