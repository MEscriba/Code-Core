**WEEK 9 - TYPESCRIPT** :zap:

**MONDAY**

[excersice Tic Tac Toe -->link](https://github.com/MEscriba/MEscriba/tree/main/TIC_TAC_TOE) :fire:

**TUESDAY**

[EVERYTHING YOU NEED TO KNOW ABOUT TYPESCRIPT](https://www.youtube.com/watch?v=eCZhz0JCVx0) :white_check_mark:

[5 REASON TO USE TYPESCRIPT](https://www.youtube.com/watch?v=BDCjP9VLoPo) :white_check_mark:

[THE FOUR PILLARS OF OOP](https://www.youtube.com/watch?v=1ONhXmQuWP8) :white_check_mark:

**WEDNESDAY**

PAUSE DAY :ambulance:

**THUESDAY**

INTERVIEW PRACTICE :sparkles:

**extras excercises**
SUM OF PARTS

Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

```
export function partsSums(ls: number[]): number[] {
  const response: number[] = [];
  const total = ls.reduce((prev: number, curr: number) => prev + curr, 0);
  response.push(total);
  for (let i = 0; i < ls.length; i++) {
    response.push(response[i] - ls[i]);
  }
  return response;
}
```

CONSECUTIVE STRINGS

You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

```
export function longestConsec(strarr: string[], k: number): string {
  let max = '';
  const n = strarr.length;

  for (let i = 0; i <= n - k && k > 0 && k <= n; i++) {
    const newStr = strarr.slice(i, i + k).join('');
    max = max.length >= newStr.length ? max : newStr;
  }
  return max;
}
```
