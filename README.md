Fizz Buzz in JS

Plan:

<!-- input | output
------+-------
   1  |   1
   2  |   2
   3  |   "Fizz"
   4  |   4
   5  |   "Buzz"
   6  |   "Fizz"
   10 |   "Buzz"
   15 |   "Fizz Buzz"
   30 |   "Fizz Buzz" -->


   | Input | Output |
| ----------- | ----------- |
| 1 | 1 |
| 2 | 2 |
| 3 | Fizz |


To print out FizzBuzz 1 to 100, in your termial...

type 'open SpecRunner.hml' (see all tests passing, beatuful!)
open the Chrome dev tools console with 'option' + '⌘ / command' + 'J'
copy paste the code below and press enter

javabuzz = new JavaBuzz();
for (var i = 1; i <= 100; i++) {
  console.log(javabuzz.game(i));
}

Given more time with this project I will

Get a lint roller over this code
Refactor this code
Make a beatuful README with proper markdownv formatting
Code a fuction that prints FizzBuzz from 1 to x (argument given)
