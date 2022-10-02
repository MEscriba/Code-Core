**JAVASCRIPT/TYPESCRIPT WEEK5** 📌

**Week challenges (Monday)**

:adhesive_bandage: practice day

**Week challenges (Tuesday)**

⚰️ practice day

**Week challenges (Wednesday)**
📈 Learn about [FP vs OOP](https://www.youtube.com/watch?v=08CWw_VD45w)
📈 Learn about [Fundamental Concepts of Object Oriented Programming](https://www.youtube.com/watch?v=m_MQYyJpIjg)
📈 Read bout OOP


**Week challenges (Thursday)**
👷 how to configure terminal to work with typescript

Generate a tsconfig.json file
The TypeScript compiler applies default behavior when you compile TypeScript source code. But you can modify the TypeScript compiler options by adding a tsconfig.json file to the root of your TypeScript project folder. This file defines the TypeScript project settings, such as the compiler options and the files that should be included.

You can use the init option of the TypeScript compiler to generate a TSConfig file with default options.

In Visual Studio Code, open a new Terminal window by selecting Terminal > New Terminal.

At the command prompt, enter tsc --init.

Notice that the new tsconfig.json file has been added to the Explorer pane. You might need to refresh the Explorer pane to view the file.

Open the tsconfig.json file in the code editor. You'll see that it has many options, most of which are commented out. Review the description of each enabled option.

In the tsconfig.json file, look for the target option and change it to "ES2015".

Update the tsconfig.json file so that the compiler saves all JavaScript files to a new folder.

a. On the Explorer pane, create a new folder in your project called build.
b. In the tsconfig.json file, look for the outDir option, remove the comment, and set the parameter to build.

Save the tsconfig.json file.

At the command prompt, enter tsc. This reads the tsconfig.json file and resets the options for the project.

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
