**JAVASCRIPT WEEK3**

**Week challenges (Monday)**

excercise 1: who likes it

```
function likes(names) {
  if (names.length == 0) {
    return 'no one likes this';
    }
  else if (names.length == 1){
    return `${names[0]} likes this`;
    }
  else if (names.length == 2){
    return `${names[0]} and ${names[1]} like this`;
    }
  else if (names.length == 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }
  else {return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}
}
```

excercise 2: count bits
```
var countBits = function(n) {
  let numberX = n.toString(2);
  let binaryOne = 0;
  for (let i = 0; i < numberX.lenght; i++){
    if (numberX[i] === '1') {
      binaryOne++;
    }
  }
  return binaryOne;
};
```

excercise 3: order with sort, join and split

```
function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
} 
```

**Week challenges (Tuesday)**

excersice 1: Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
```
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
```
excersice 2: Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

```
function duplicateCount(text) {
  let textArray = text.toLowerCase().split('').sort();
  let i = 0,
    result = 0,
    lastIndexOfChar = 0;
  while (textArray.length) {
    lastIndexOfChar = textArray.lastIndexOf(textArray[i]);
    if (lastIndexOfChar !== i) {
      i = lastIndexOfChar;
      result++;
    }
    textArray = textArray.slice(++i);
    i = 0;
  }
  return result;
}
```
excersice 3: Decode Morse

```
decodeMorse = function(morseCode){
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}
```

**Week challenges (Wednesday)**

excersice 1: Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

```
function validParentheses(parens) {
  let valid = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === ')') valid--;
    if (parens[i] === '(') valid++;
    if (valid < 0) return false;
  }
  return valid == 0;
}
```
excersice 2: Complete the method/function so that it converts dash/underscore delimited words into camel casing.

```
function toCamelCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (i != 0 && (str[i - 1] === '_' || str[i - 1] === '-')) {
      result += str[i].toUpperCase();
    } else if (str[i] != '-' && str[i] != '_') {
      result += str[i];
    }
  }
  return result;
}

```
excersice 3:Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

```
function uniqueInOrder(iterable) {
  let result = [];
  let last;
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== last) {
      last = iterable[i];
      result.push(last);
    }
  }
  return result;
}
```

**Week challenges (Thursday)**

excersice 1:

```
function foldArray(array, runs){
  let newArray = array
  let finalArray = []
  for (let i =0; i < runs; i++) {
    if (i >= 1) {
      newArray = finalArray
      finalArray = []
    }
    for (let j =0; j < newArray.length/2; j++) {
      if (j === newArray.length-j-1) {
        finalArray.push(newArray[j])
      } else {
        finalArray.push(newArray[j] + newArray[newArray.length-j-1] )
      } 
    }
  }
  return finalArray;
} 
```
excersice 2: encrypt this
You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.

```
function encryptedWord(word) {
  if (word.length == 1) return word.charCodeAt();
  if (word.length == 2) return `${word.charCodeAt(0)}${word[1]}`;
  return `${word.charCodeAt(0)}${word[word.length - 1]}${word.slice(
    2,
    word.length - 1
  )}${word[1]}`;
}

var encryptThis = function (text) {
  return text.split(' ').map(encryptedWord).join(' ');
};
```
