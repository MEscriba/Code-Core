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
