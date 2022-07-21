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
  2. valueDolar <-- 0.3
  3. bitcoinsuser <-- GET
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
.data
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

              li $v0, 1
              move $a0, $t0
              syscall
              
              
excersice 2:

Create a program that displays your name

.data
        message: .asciiz "\nMartin Escriba Bab\n"
  .text
        main:
              li $v0, 4
              la $a0, message
              syscall






<!---
MEscriba/MEscriba is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
