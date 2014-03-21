describe("Module", function() {
  it("should contate the array into a string", function() {
    expect(join(['one', 'two', 'three'], ' and ')).toEqual('one and two and three and ');
  });
});