'use strict'

describe('Java Buzz', function() {

  let javaBuzz;

  beforeEach(function() {
    javaBuzz = new JavaBuzz();
  });

  it('returns 1 when given 1', function() {
    expect(javaBuzz.game(1)).toEqual(1);
  });

  it('returns 2 when given 2', function() {
    expect(javaBuzz.game(2)).toEqual(2);
  });

  it('returns Fizz when given 3', function() {
    expect(javaBuzz.game(3)).toEqual('Fizz');
  });

  it('returns Buzz when given 5', function() {
    expect(javaBuzz.game(5)).toEqual('Buzz');
  });

  it('returns Fizz when given 6', function() {
    expect(javaBuzz.game(6)).toEqual('Fizz');
  });

  it('returns Buzz when given 10', function() {
    expect(javaBuzz.game(10)).toEqual('Buzz');
  });

  it('returns FizzBuzz when given 15', function() {
    expect(javaBuzz.game(15)).toEqual('FizzBuzz');
  });

  it('returns FizzBuzz when given 30', function() {
    expect(javaBuzz.game(30)).toEqual('FizzBuzz');
  });
  
});
