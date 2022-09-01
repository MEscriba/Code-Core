**WEEK 7 - TYPESCRIPT**

**MONDAY**

O.P.P. GLOSSARY:

Abstraction:

Inheritance:

Polymorphism:

Encapsulation:

Class:

Classes enable you to express common object-oriented patterns in a standard way, making features like inheritance more readable and interoperable. In TypeScript, classes are yet another way to define the shape of an object, in addition to describing object types with interfaces and functions.

If you haven't worked with classes, it may be helpful to review a few basic concepts.

You can think of a class as a blueprint for building objects, like a car. A Car class describes the attributes of a car, for example, the make, color, or number of doors. It also describes behaviors that the car can perform, like accelerating, braking, or turning.

But the Car class is just a plan for building the car. You must build an instance of Car from the Car class before it becomes an object that you can assign property values to (like setting the color to blue) or call its behaviors (like applying the brakes.)

The Car class can be reused to create any number of new Car objects, each with their own characteristics. You can also extend the Car class. For example, an ElectricCar class might extend Car. It will have all the same attributes and behaviors of Car but can also have its own unique attributes and behaviors, like its range and a charging operation.

Diagram showing Car class with properties and methods.

The Car class includes the properties make, color and, doors and the methods accelerate, brake, and turn. When the ElectricCar class extends Car, it includes all of the properties and methods of Car, plus a new property called range and a new method called charge.

A class encapsulates data for the object. Data and behavior are included in the class but the details of both can be hidden from the person who is working with the object in code. For example, if you call the turn method of a Car object, you don't need to know exactly how the steering wheel works, you just need to know that the car will turn left when you tell it to. The class serves as a black box where all the attributes and behaviors are only exposed through the properties and methods, limiting what a coder can do with it.

Class components
Properties, also referred to as fields, are the data (or attributes) for the object. These are the defining characteristics of the object that you can set or return from your code.
The constructor is a special function used to create and initialize objects based on the class. When you create a new instance of the class, the constructor creates a new object with the class shape and initializes it with the values passed to it.
Accessors are a type of function that you use to get or set the value of properties. Properties can be read-only by simply omitting the set accessor in the class, or inaccessible by omitting the get accessor (the property will return undefined if you attempt to access it, even if it's assigned a value during initialization.)
Methods are functions that define the behaviors or actions that the object can do. You can call these methods to invoke the behavior of the object. You can also define methods that are only accessible from within the class itself and are typically called by other methods in the class to perform a task.

Object:

Instance:

Interface:

**Access Modifiers:**

Define the accessors
While you can access the class properties directly (they're public, by default), TypeScript supports getters/setters as a way of intercepting access to a property. This gives you finer-grained control over how a member is accessed on each object.

To set or return the value of the object's members from code, you must define get and set accessors in the class.

**Constructors:**

Classes in TypeScript create two separate types: the instance type, which defines what members an instance of a class has, and the constructor function type, which defines what members the class constructor function has. The constructor function type is also known as the "static side" type because it includes static members of the class.

Using a constructor can simplify classes and make them easier to manage when you're working with many classes.

A constructor function initializes the properties of the class and has three parts:

The constructor keyword.
A parameter list, which defines the parameters that will be passed to the new object when a new instance is created. When defining the parameter list, remember that:
It's not required to define a parameter for every property in the class.
As with all TypeScript functions, the parameters can be required or optional, have default values, or be rest parameters. (This is a key difference from JavaScript.)
The parameter names can be different from the property names. Keep in mind that these names will appear in Intellisense when you work with objects of this type so use names that are sufficiently descriptive.
The property assignments. Each statement assigns the value of a parameter to the value of a property. To indicate that you're accessing a member of the class (in this case, the property), apply the this. keyword.
A class may contain at most one constructor declaration. If a class contains no constructor declaration, an automatic constructor is provided.



**TUESDAY**

**WEDNESDAY**

**THURSDAY**


