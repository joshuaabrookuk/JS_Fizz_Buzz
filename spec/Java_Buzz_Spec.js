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

});
