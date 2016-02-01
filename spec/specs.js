describe('leapYear', function() {
  it("is false for a year that is not divisible by 4, 100, or 400", function() {
    expect(leapYear(1800)).to.equal(false);
  });

  it("is true for years divisible by 4", function() {
    expect(leapYear(2004)).to.equal(true);
  });

  it("is false if years is a negative number", function() {
    expect(leapYear(-2)).to.equal(false);
  });

  it("is false if years is a letter", function() {
    expect(leapYear('a')).to.equal(false);
  });
  it("is false if years is a symbol", function() {
    expect(leapYear('@')).to.equal(false);
  });

});
