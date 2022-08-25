**JAVASCRIPT WEEK5**

**Week challenges (Monday)**

practice day

**Week challenges (Tuesday)**

practice day

**Week challenges (Wednesday)**
Learn about [FP vs OOP](https://www.youtube.com/watch?v=08CWw_VD45w)
Learn about [Fundamental Concepts of Object Oriented Programming](https://www.youtube.com/watch?v=m_MQYyJpIjg)
Read bout OOP


**Week challenges (Thursday)**
Get started with TypeScript guided exercise, using Typescript
✨Complete your 3rd Core Challenge. This is one of the requirements for the certification, where you'll boost your dev professional-brand.

**Excersices**

Find The Missing Letter
```
function findMissingLetter(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].charCodeAt() + 1 !== array[i + 1].charCodeAt()) {
      return String.fromCharCode(array[i].charCodeAt() + 1);
    }
  }
}
```
Reverse Or Rotate?
```
function revrot(str, sz) {
  if (sz <= 0 || sz >= str.length || str === '') return '';
  let regex = new RegExp(`\\d{${sz}}`, 'g');
  let chunks = str.match(regex);
  let sum = 0;
  let chunkArray = [];
  let result = chunks.map((chunk) => {
    sum = chunk
      .split('')
      .map((digit) => Math.pow(+digit, 3))
      .reduce((prev, curr) => prev + curr, 0);
    chunkArray = chunk.split('');
    if (sum % 2 === 0) return chunkArray.reverse().join('');
    return chunkArray.push(chunkArray.shift()), chunkArray.join('');
  });
  return result.join('');
}
```
What's Your Poison?
```
function find(rats) {
  return rats.reduce((prev, curr) => {
    return prev + Math.pow(2, curr);
  }, 0);
}
```
Array.diff
```
function arrayDiff(a, b) {
  return a.filter((e) => b.indexOf(e) === -1);
}
```
