'use strict'

describe('Java Buzz', function() {

  let javaBuzz;

  beforeEach(function() {
    javaBuzz = new JavaBuzz();
  });

  it('returns 1 when given 1', function() {
    expect(javaBuzz.game(1)).toEqual(1);
  });
});
