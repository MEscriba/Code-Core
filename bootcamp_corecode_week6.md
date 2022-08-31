**TYPESCRIPT WEEK6**

**Week challenges (Monday)**

excersices in typescript
```
let firstName: string;
let lastName: string;;
let fullName: string;
let age: number;
let ukCitizen: boolean;

firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;

if (ukCitizen) {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
} else {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
}

```

```
function whichMonths(season:string) {
    let monthsInSeason: string="";
    switch (season) {
        case "Fall":
            monthsInSeason = "September to November";
            break;
        case "Winter":
            monthsInSeason = "December to February";
            break;
        case "Spring":
            monthsInSeason = "March to May";
            break;
        case "Summer":
            monthsInSeason = "June to August";
    }
    return monthsInSeason;
}

console.log(whichMonths("Fall"));
```
```
let randomNumbers: number[]= [];
let nextNumber;
for (let i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumber);
}

console.log(randomNumbers);
```

**Week challenges (Tuesday)**

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
```
export function squareSum(numbers: number[]): number {
  return numbers.reduce(
    (prev: number, curr: number) => prev + Math.pow(curr, 2),
    0
  );
}
```

Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)

   7      6      5      4      3            2      1
   
   ```
   export function warnTheSheep(queue: string[]): string {
  const wolfPosition = queue.indexOf('wolf');
  if (wolfPosition == queue.length - 1)
    return 'Pls go away and stop eating my sheep';
  return `Oi! Sheep number ${Math.abs(
    wolfPosition + 1 - queue.length
  )}! You are about to be eaten by a wolf!`;
}
   
   ```



**Week challenges (Wednesday)**

From Wikipedia:

"A divisibility rule is a shorthand way of determining whether a given integer is divisible by a fixed divisor without performing the division, usually by examining its digits."

When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:

1, 10, 9, 12, 3, 4 because:

10 ^ 0 ->  1 (mod 13)
10 ^ 1 -> 10 (mod 13)
10 ^ 2 ->  9 (mod 13)
10 ^ 3 -> 12 (mod 13)

const rem = [1, 10, 9, 12, 3, 4];
```
export function process(n: number): number {
  let reversedNumber: string[] = n.toString().split('').reverse();
  let index = 0;
  let result = reversedNumber.reduce((total: number, digit: string) => {
    if (index > 5) index = 0;
    return total + Number(digit) * rem[index++];
  }, 0);
  if (result === n) return result;
  return process(result);
}

export function thirt(n: number): number {
  return process(n);
}
```

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.

```
export class G964 {
  public static digPow = (n: number, p: number) => {
    const sum = n
      .toString()
      .split('')
      .map(Number)
      .reduce((prev: number, curr: number) => prev + Math.pow(curr, p++), 0);
    if (sum % n === 0) return sum / n;
    return -1;
  };
}
```
**Week challenges (Thursday)**

In the board game Scrabble2, each tile contains a letter, which is used to spell words, and a score, which is used to determine the value of words.

Write a definition for a class named Tile that represents Scrabble tiles. The instance variables should be a string named letter and an number named value.
Write a constructor that takes parameters named letter and value and initializes the instance variables.
Write a method named printTile that prints the instance variables in a reader-friendly format (not the { ... } format way).
Don't worry you don't have to check if the letter is no more than one String length.
You can use this Main class to test your code.
import Tile from './Tile';
export default class Main {
  start() {
    const A = new Tile('A', 10);
    A.printTile(); // Example of a reader-friendly format above
    /*
      ==================
        Letter: A
        Value: 10
      ==================
    */
    const W = new Tile('W', '50'); // This should show and error
  }
}
On your index.ts you can now use this to test your solution
import Main from './Main';
const main = new Main();
main.start();

**solution**

```
export default class Tile {
  letter: string;
  value: number;

  constructor(letter: string, value: number) {
    this.letter = letter;
    this.value = value;
  }

  printTile() {
    console.log(`
        ===========================
          Letter: ${this.letter}
          Value: ${this.value}
        ===========================
    `);
  }
}
```

You have been hired by a brand of digital watches to be able to create the functionality of keeping track of time, for this you have been asked to do the following:

Write a definition for the class name Time this class would be use to build a digital clock. This class should have 3 attributes of type number. hour, minute and second.
Write a constructor that takes parameters named hour, minute and second and initializes the instance variables.
Write a method called getInSeconds that returns a number representing the actual time in the instance represented in seconds.
Write a method named printTime that prints the instance variables in a reader-friendly format (not the { ... } format way).
import Time from './Time';
export default class Main {
  start() {
    const t = new Time(10, 45, 1);
    t.printTime(); // Example of a reader-friendly format above
    /*
      ==================
        Hours: 10
        Minutes: 45
        Seconds: 1
      ==================
    */
    console.log(t.getInSeconds()); // 38701
  }
}
On your index.ts you can now use this to test your solution
import Main from './Main';
const main = new Main();
main.start();

**solution**

```
export default class Time {
  hour: number;
  minute: number;
  second: number;

  constructor(hour: number, minute: number, second: number) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  printTime() {
    console.log(`
        ===========================
          Hours: ${this.hour}
          Minutes: ${this.minute}
          Seconds: ${this.second}
        ===========================
    `);
  }

  getInSeconds(): number {
    const minutes = this.hour * 60 + this.minute;
    return minutes * 60 + this.second;
  }
}
```


A rational number is a number that can be represented as the ratio of two integers. For example, 2/3 is a rational number, and you can think of 7 as a rational number with an implicit 1 in the denominator (7/1). For this assignment, you are going to write a class definition for rational numbers.

Create a new class named Rational. A Rational object should have two number instance variables to store the numerator and denominator.
Write a constructor for your class that takes two arguments and that uses them to initalize the instance variables.
Write a method called printRational that prints the object in some reasonable format.
Write a method called invert that inverts the number by swapping the numerator and denominator. This method should modify the instance variables.
Write a method called toFloat that converts the rational number to a floating-point number and returns the result. This method is a pure function it does not modify the object.
Write method named reduce that reduces a rational number to its lowest terms by finding the greatest common divisor (GCD) of the numerator and denominator and dividing through. This method should modify the instance variables. To calculate the GCD you can search for Euclidian Algorithm: GCD.
import Rational from './Rational';
export default class Main {
  start() {
    const r1 = new Rational(36, 120);
    r1.printRational(); // 36 / 120
    console.log(r1.toFloat()); // 0.3
    r1.reduce();
    r1.printRational(); // 3 / 10
    r1.invert();
    r1.printRational(); // 10 / 3
    r1.reduce();
    r1.printRational(); // 10 / 3
  }
}
On your index.ts you can now use this to test your solution
import Main from './Main';
const main = new Main();
main.start();

**solution**

```
export default class Rational {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  printRational() {
    console.log(`${this.numerator} / ${this.denominator}`);
  }

  invert() {
    [this.numerator, this.denominator] = [this.denominator, this.numerator];
  }

  toFloat(): number {
    return this.numerator / this.denominator;
  }

  gcd(n: number, d: number): number {
    if (d == 0) return n;
    return this.gcd(d, n % d);
  }

  reduce() {
    const gcd = this.gcd(this.numerator, this.denominator);
    this.numerator = this.numerator / gcd;
    this.denominator = this.denominator / gcd;
  }
}
```

**EXTRA**

Typescript Introduction

Create Folder

  $ mkdir <FOLDER_NAME>

Go Into Folder
  
  $ cd <FOLDER_NAME>

Get Out Of Folder
 
 $ cd ..

Clean Terminal (Windows)
 
 $ cls

Clean Terminal (Linux & Mac)
  
  $ clean
Install Node
Here is the link to install node

Check Node Version
 
 $ node --version

Check npm Version
  
  $ npm --version

Start npm Project
  
  $ npm init --y

Install Typescript (local)
  
  $ npm install typescript

Compile Typescript File
  
  $ npx tsc <FILE_NAME>.ts

Install All Node Packages
  
  $ npm install

Node RPL State
  
  $ node

Run Javascript File On Node
 
 $ node <FILE_NAME>.js
