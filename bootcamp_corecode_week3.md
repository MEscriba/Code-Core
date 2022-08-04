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
function getWordNumber(word) {
  for (let i = 0; i < word.length; i++) {
    if (!Number.isNaN(Number(word[i]))) return word[i];
  }
}

function cleanUndefined(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] != undefined) result.push(array[i]);
  }
  return result;
}

function order(words) {
  let sortedArray = [];
  let wordsArray = words.split(' ');
  for (let i = 0; i < wordsArray.length; i++) {
    let wordNumber = getWordNumber(wordsArray[i]);
    sortedArray[wordNumber] = wordsArray[i];
  }
  return cleanUndefined(sortedArray).join(' ');
}
```

**Week challenges (Tuesday)**


```
```

**Week challenges (Wednesday)**

```

```
**Week challenges (Thursday)**
 

