- 👋 Hi, I’m @MEscriba

I'm going to be uploading to my readme the core-code bootcamp tasks that I'm doing!!!

**Week challenges (Tuesday)**

1-The difference between compiled and interpreted languages is contained in the way they interact with the computer.
In a compiled language, the target machine can read the source code without the help of another program, unlike in an interpreted language, which needs a program to understand its instructions.

2- The Java language is both compiled and interpreted.
   VIEWED VIDEOS:
   
   [Video Source](https://www.youtube.com/watch?v=G81hoJTvQVg)
   

3-  pseudocode excersice
  1. START
  2. valueDolar <-- 0.3 //ahi puse un valor ficticio como que un dolar vale 0.3 bitcoins
  3. bitcoinsuser <-- GET // aca el usuario ingresaria la cantidad de bitcoins que quiere convertir
  4. FUNCTION <-- valueDolar * bitcoinuser
  5. PRINT FUNCTION
  6. END

4- I learn about low-level and high-level lenguages with:

[Video Source](https://www.youtube.com/watch?v=bUWCD45qniA)


**Week challenges (Wednesday)** 

1- My date birth binary code (excersice):

date birth: 26-06-1984

binary code date birth: 11010-110-11111000000


2- code MIPS excersice:

excersice 1: 

Create a program that adds any two given numbers provided by the user
```
.data
              result: .asciiz "\nEl resultado es: "
	      number1: .asciiz "\nIngrese el primer numero: "
	      number2: .asciiz "\nIngrese el segundo numero: "
  .text
	      main:
              li $v0, 4
              la $a0, number1
              syscall

              li $v0, 5
              syscall

              move $t0, $v0

              li $v0, 4
              la $a0, number2
              syscall

              li $v0, 5
              syscall

              move $t1, $v0
	      
              add $t2, $t0, $t1

	      li $v0, 4
              la $a0, result
              syscall

              li $v0, 1
              move $a0, $t2
              syscall              
   ```           
excersice 2:

Create a program that displays your name
```
.data

        message: .asciiz "\nMartin Escriba Bab\n"
	
  .text
  
        main:
	
              li $v0, 4
              la $a0, message
              syscall
```
**Week challenges (Thursday)**

1- print numbers - excersice
```
let number;
for (let i=0, i<100, i++){
if (number % 2==0){
console.log(number)
}
}
```

2- bad code

this is the original code with my comments and improvements:

```
var cond = false; //es recomendable declarar las variables con let!

if ((cond = true)) { // la condicion dentro del if la cambiaria por (cond == true) quitandole un parentesis y agregandole un =
  console.log('The cond variable is true');
} else {
  console.log('The cond variable is false');
}
```

3- bad code 2
```
let n = 100;

if (n == 100) {
  console.log('This is a special number!');
}
 else if ((n < 1000)&&(n % 10 == 0 )&&(n!=100) {
  console.log('This number is almost special');
} 
else {
  console.log('Just a regular number');
}
```

**link a [JS Bin](https://jsbin.com/mafowaceyi/edit?js,console)**



<!---
MEscriba/MEscriba is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
