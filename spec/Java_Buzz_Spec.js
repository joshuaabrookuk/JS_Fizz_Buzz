describe('Java Buzz', function() {

  it('returns 1 when given 1', function() {
    javaBuzz = new JavaBuzz
    expect(javaBuzz.game(1)).toEqual(1);
  });
});
