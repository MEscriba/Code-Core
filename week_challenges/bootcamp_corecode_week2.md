**JAVASCRIPT WEEK2**:monocle_face:

**Week challenges (Monday)**


📄 learn about --> if else, for, while, functions.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Week challenges (Tuesday)**

excersice 1:
```
function multiply(a, b){
  return a * b
}
```
excersice 2:
```
function uniTotal(str) {
  let total = 0; 
  for (let i = 0, length = str.length; i < length; i++) {
    total += str[i].charCodeAt();
  }
  return total;
}
```
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Week challenges (Wednesday)**

excersice 1: learn about html, syntax, tags, dom, etc

excersice 2:
```
function getChar(c) {
  return String.fromCharCode(c)  
}
```
excersice 3:
```
function addBinary(a,b) {
  let suma = (a + b).toString(2);  
  return suma;
}
```
excersice 4:
```
function finalGrade (exam, projects) {
  if (exam>90 || projects>10){
  return 100;
}
   else if (exam>75 && projects>=5 ){
  return 90;
}
    else if (exam>50 && projects>=2 ){
  return 75;
}
      else {
  return 0;// final grade
}
}
```
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Week challenges (Thursday)**
 
 excersice 1:
 ```
 function remove(s){
 
  return s.replace(/!+$/, '');
}

```

excersice 2:
```
function shortcut(string) {

  return string.replace(/[aeiou]/g, '');
}

```
excercise 3:
```

const rps = (p1, p2) => {

  if (p1 === p2) return 'Draw!';
  
  else if (p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!';
  
  else if (p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!';
  else if (p1 === 'paper' && p2 === 'rock') return 'Player 1 won!';
  else{
  return 'Player 2 won!'};
};
```
excercise 4:

```
function persistence(num) {

  let times = 0;
  let digits = [];
  while (num >= 10) {
    digits = num.toString().split('');
    num = 1;
    for (let i = 0; i < digits.length; i++) {
      num *= digits[i];
    }
    times++;
  }
  return times; 
}
```
extras excersices:

1- duty free
```
function dutyFree(normPrice, discount, hol){
let result = (normPrice * discount)/100;
  let res = Math.floor(hol/result);
  return res;
}
```
2- twice years old

```
function twiceAsOld(dadYearsOld, sonYearsOld) {

  let doubleSonAge = sonYearsOld * 2;
  let ageDiference = dadYearsOld - doubleSonAge;
  return Math.abs(ageDiference);
}
```
3- valid spacing

```
 function validSpacing(s) {
  if (s.length === 0) return true;
  if (s[0] === ' ' || s[s.length - 1] === ' ') return false;
  let aSpaces0 = s.split(' ');
  for (let i = 0, length = aSpaces0.length; i < length; i++) {
    if (aSpaces0[i] === '') return false;
  }
  return true;
}
```

4- fake binary
```
function fakeBin(x) {
  let resultDigits = '';
  for (let i = 0; i < x.length; i++) {
    if (parseInt(x[i]) < 5) {
      resultDigits = resultDigits + '0';
    } else {
      resultDigits = resultDigits + '1';
    }
  }
  return resultDigits;
}
```
