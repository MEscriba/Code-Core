**JAVASCRIPT WEEK2**

**Week challenges (Monday)**


learn about --> if else, for, while, functions.


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
excersice 3:
```
function getChar(c) {
  return String.fromCharCode(c)  
}
```
excersice 4:
```
function addBinary(a,b) {
  let suma = (a + b).toString(2);  
  return suma;
}
```
excersice 5:
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
**Week challenges (Wednesday)**
