## FizzBuzz in JavaScript

### Plan:

1.Create Input/ Output chart
| Input | Output |
| ----------- | ----------- |
| 1 | 1 |
| 2 | 2 |
| 3 | Fizz |
| 4 | 4 |
| 5 | Buzz |
| 6 | Fizz |
| 10 | Buzz |
| 15 | FizzBuzz |
2.Set-up repo on github and clone
3.Set-up project files Jasmine, README.md
4.Follow the RED, GREEN, REFACTOR TTD process
1.Create a failing test
2.Pass the test in the simplist possible way
3.Refactor if necessary
8.Finish and reflect
9.Update README

### Use

Clone this repo and navigate to it in your terminal

To print out FizzBuzz 1 to 100

type 'open SpecRunner.hml' (see all tests passing, beatuful!)
open the Chrome dev tools console with 'option' + '⌘ / command' + 'J'
copy paste the code below and press enter

javabuzz = new JavaBuzz();
for (var i = 1; i <= 100; i++) {
  console.log(javabuzz.game(i));
}

### Refelction

Given more time with this project I will

Get a lint roller over this code
Refactor this code
Make a beatuful README with proper markdownv formatting
Code a fuction that prints FizzBuzz from 1 to x (argument given)
