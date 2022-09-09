**WEEK 8 - TYPESCRIPT**

**MONDAY**

[VIDEO LINK](https://www.youtube.com/watch?v=pTB0EiLXUC8) OOP CONCEPTS

**TUESDAY**

abstract class example:

```
abstract class Animal {
    abstract name: string
    age: number

    constructor(age: number) {
        //this.name = name // this must now be assigned in the derived class instead
        this.age = age
    }

    feed(food: string, amount: number): void {
        console.log(
            'Feeding ' +
                this.name +
                ' the ' +
                this.constructor.name +
                ' ' +
                amount +
                ' kg of ' +
                food
        )
    }
}

class Cat extends Animal {
    name: string
    constructor(name: string, age: number) {
        super(age)
        this.name = name
    }
}

class Dog extends Animal {
    name: string
    constructor(name: string, age: number) {
        super(age)
        this.name = name
    }
}

const CAT = new Cat('Cosmo', 8)
const DOG = new Dog('Rusty', 12)
CAT.feed('Fish', 0.1)
DOG.feed('Beef', 0.25)
```

[ABSTRACT CLASSES VS INTERFACES](https://www.youtube.com/watch?v=Lnqmde9LP74)

**WEDNESDAY**

EXCERCISES:

1-Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array

```
xport function parse(data: string): number[] {
  let value = 0;
  const result: number[] = [];
  const commands = data.split('');
  commands.forEach((command: string) => {
    switch (command) {
      case 'i':
        value++;
        break;
      case 'd':
        value--;
        break;
      case 's':
        value = Math.pow(value, 2);
        break;
      case 'o':
        result.push(value);
        break;
    }
  });
  return result;
}
```

2-The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

```
export function duplicateEncode(word: string){
    // ...
    return word
    .toLowerCase()
    .split('')
    .map((a, i, w) => {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('')
}
```

3-Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

```
export const findOdd = (xs: number[]): number => {
  // happy coding!
  return xs.reduce( (a,b)=> a^b);
};

```

4-Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

```
export class G964 {
  public static inArray(a1: string[], a2: string[]): string[] {
    return a1
      .filter((a: string) => a2.some((b: string) => b.includes(a)))
      .sort();
  }
}

```
**THURSDAY**

Generics
Description
We have just learn about generics, an we where creating our own implementation for the Linkedlist structure, but it is incomplete, you task is to finish the missing methods.

addFirst: Adds a new node at the start of the structure
removeLast: Removes the last node of the structure


LINKEDLIST

```
mport Node from './Node';

export class LinkedList<T> {
  private head: Node<T> | null = null;
  private length: number = 0;

  get size(): number {
    return this.length;
  }

  // First In First Out (FIFO)
  public add(value: T): void {
    if (this.head == null) {
      this.head = new Node(value);
    } else {
      let node = this.head;
      while (node.next !== null) {
        node = node.next;
      }
      node.next = new Node(value);
    }
    this.length++;
  }

  public remove(): void {
    if (this.head !== null) {
      this.head = this.head.next;
      this.length--;
    }
  }

  // Last In First Out (LIFO)
  public addFirst(value: T) {
    if (this.head === null) {
      this.add(value);
    } else {
      let node = new Node(value);
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }

  public removeLast(): void {
    if (this.head !== null) {
      let node = this.head;
      let previous: Node<T> = node;
      while (node.next !== null) {
        previous = node;
        node = node.next;
      }
      previous.next = null;
      this.length--;
    }
  }

  public toString(): string {
    if (this.head === null) return '[]';
    let representation = '';
    let node = this.head;
    while (node.next !== null) {
      representation = `${representation}${JSON.stringify(node.value)},`;
      node = node.next;
    }
    representation = `${representation}${JSON.stringify(node.value)}`;
    representation = `[${representation}]`;
    return representation;
  }
}
```
NODE.TS

```
export default class Node<T> {
  public next: Node<T> | null = null;
  private data: T;

  get value(): T {
    return this.data;
  }

  constructor(data: T) {
    this.data = data;
  }
}

```
