**WEEK 7 - TYPESCRIPT**

**MONDAY**

O.P.P. GLOSSARY:

**Abstraction:**

Abstraction is one of the key concepts of object-oriented programming (OOP) languages. Its main goal is to handle complexity by hiding unnecessary details from the user. That enables the user to implement more complex logic on top of the provided abstraction without understanding or even thinking about all the hidden complexity.

That’s a very generic concept that’s not limited to object-oriented programming. You can find it everywhere in the real world.

Abstraction in the real world
I’m a coffee addict. So, when I wake up in the morning, I go into my kitchen, switch on the coffee machine and make coffee. Sounds familiar?

Making coffee with a coffee machine is a good example of abstraction.

You need to know how to use your coffee machine to make coffee. You need to provide water and coffee beans, switch it on and select the kind of coffee you want to get.

The thing you don’t need to know is how the coffee machine is working internally to brew a fresh cup of delicious coffee. You don’t need to know the ideal temperature of the water or the amount of ground coffee you need to use.

Someone else worried about that and created a coffee machine that now acts as an abstraction and hides all these details. You just interact with a simple interface that doesn’t require any knowledge about the internal implementation.

You can use the same concept in object-oriented programming languages like Java.

Abstraction in OOP

Objects in an OOP language provide an abstraction that hides the internal implementation details. Similar to the coffee machine in your kitchen, you just need to know which methods of the object are available to call and which input parameters are needed to trigger a specific operation. But you don’t need to understand how this method is implemented and which kinds of actions it has to perform to create the expected result.

Let’s implement the coffee machine example in Java. You do the same in any other object-oriented programming language. The syntax might be a little bit different, but the general concept is the same.

**Inheritance:**

Inheritance in OOP = When a class derives from another class.

The child class will inherit all the public and protected properties and methods from the parent class. In addition, it can have its own properties and methods.

An inherited class is defined by using the extends keyword.

Let's look at an example:

Example

```
<?php
class Fruit {
  public $name;
  public $color;
  public function __construct($name, $color) {
    $this->name = $name;
    $this->color = $color;
  }
  public function intro() {
    echo "The fruit is {$this->name} and the color is {$this->color}.";
  }
}

// Strawberry is inherited from Fruit
class Strawberry extends Fruit {
  public function message() {
    echo "Am I a fruit or a berry? ";
  }
}
$strawberry = new Strawberry("Strawberry", "red");
$strawberry->message();
$strawberry->intro();
?>
```

**Polymorphism:**

Polymorphism is the ability to create a class that has more than one form. Or in other words, classes have the same methods but different implementations.

Example
So, before explaining how polymorphism works, I better show you, how it does not work by example.

Imagine we have two animal classes, one class is called Dog, the other class is called Cat. Both classes should have the same properties and methods.

```
class Dog {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): void {
    process.stdout.write('wuff wuff\n');
  }
}

class Cat {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): void {
    process.stdout.write('meow meow\n');
  }
}

const pocky: Cat = new Cat('Pocky');
pocky.makeSound(); // -> meow meow

const toshii: Dog = new Dog('Pocky');
toshii.makeSound(); // -> wuff wuff
```

**Encapsulation:**

What does encapsulation mean: In object-oriented computer programming (OOP) languages, the notion of encapsulation (or OOP Encapsulation) refers to the bundling of data, along with the methods that operate on that data, into a single unit. Many programming languages use encapsulation frequently in the form of classes. A class is a program-code-template that allows developers to create an object that has both variables (data) and behaviors (functions or methods). A class is an example of encapsulation in computer science in that it consists of data and methods that have been bundled into a single unit.

Encapsulation may also refer to a mechanism of restricting the direct access to some components of an object, such that users cannot access state values for all of the variables of a particular object. Encapsulation can be used to hide both data members and data functions or methods associated with an instantiated class or object.

Benefits of Encapsulation Programming
Encapsulation in programming has a few key benefits. These include:

Hiding Data: Users will have no idea how classes are being implemented or stored. All that users will know is that values are being passed and initialized.
More Flexibility: Enables you to set variables as red or write-only. Examples include: setName(), setAge() or to set variables as write-only then you only need to omit the get methods like getName(), getAge() etc.
Easy to Reuse: With encapsulation it's easy to change and adapt to new requirements.

**Class:**

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

**Object:**

in JavaScript, the fundamental way that we group and pass around data is through objects. In TypeScript, we represent those through object types.

As we’ve seen, they can be anonymous:
```
function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}
```
**Instance:**

In object-oriented programming (OOP), an instance is a specific realization of any object. An object may be different in several ways, and each realized variation of that object is an instance. The creation of a realized instance is called instantiation. In computing, an instance can take the form of a document type or an element.

what is object-oriented programming
This image shows an example of the structure and naming in object-oriented programming (OOP).
Whenever you run a program, it's an instance of that program. In languages that create objects from classes, an object is an instantiation of a class. That is, an object is a member of a given class with specified values rather than variables. For example, in a non-programming context, "bird" could be a class and your pet bird Polly an object of that class.

Class instance and instance variable
An instance of a class is an object. It is also known as a class object or class instance. As such, instantiation may be referred to as construction.

Whenever values vary from one object to another, they are called instance variables. These variables are specific to a particular instance. A copy of an instance variable is created for every object and won't be shared by other objects. 

**Interface:**

An interface is extremely helpful when dealing with data structures as they’re a very visual representation (albeit so is type, this is typically my preference). It’s completely okay to choose a type for your objects and arrays too.

Nevertheless, let’s uncover some more about Types vs Interfaces in TypeScript so you can make a more informed decision.

I’d recommend using a type instead of an interface when you want to intersect types. Using extends feels a bit more verbose and not as clear to read and I feel this is what the type keyword was made for.

It’s also super easy to just combine more types with type. I find the code is clearer than using extends with intefaces.

Interface are also limited - the type alias can be used for more complex types such as tuples, primitives, unions and other more.

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

excersice inout in terminal

example code

```
import Input from './Input';
export class Main {
  async start() {
    // Get a single input prompt
    let input = await Input.getInput('Where are you from?');
    console.log(input);
  }
}
```

```
import Input from './Input';
export class Main {
  async start() {
    // Get a form prompt
    const formChoices = [
      { name: 'age', message: 'What is your age' },
      { name: 'lastName', message: 'What is your last name' },
      { name: 'movie', message: 'What is your favorite movie' },
    ];
    let input = await Input.getForm('Personal Information', formChoices);
    console.log(input);
  }
}
```

```
import Input from './Input';
export class Main {
  async start() {
    // Get a select prompt
    const selectChoices = [
      { option: 1, message: 'Pizza' },
      { option: 2, message: 'Sandwich' },
      { option: 3, message: 'Cofee' },
      { option: 4, message: 'Lasagna' },
    ];
    let input = await Input.getSelect('Menu', selectChoices);
    console.log(input);
  }
}
```
**WEDNESDAY**

excersice:

Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

```
export const towerBuilder = (nFloors: number): string[] => {
  if (nFloors === 1) return ['*'];
  const tower: string[] = [];
  const maxNumber = 2 * nFloors - 1;
  for (let i = 1; i <= nFloors; i++) {
    tower.push(
      `${' '.repeat(nFloors - i)}${'*'.repeat(2 * i - 1)}${' '.repeat(
        nFloors - i
      )}`
    );
  }
  return tower;
};
```


**THURSDAY**


