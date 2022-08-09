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
excersice 2:

```

```
excersice 3:

```

```

**Week challenges (Thursday)**
 

