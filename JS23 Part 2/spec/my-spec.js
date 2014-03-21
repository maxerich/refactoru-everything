describe("splice", function() {
  it("should remove elements from an array", function() {
    expect(splice(['a','b','c','d','e'], 2, 2)).toEqual(['a','b','e']);
  });
  it("should not change the original array", function() {
  	var a = ['a','b','c','d','e'];
  	splice(a, 2, 2)
  	expect(a).toEqual(['a','b','c','d','e']);
  });
  it("Should insert an item", function() {
  	expect(splice(['a','b','c','d','e'], 1, 2, 'z')).toEqual(['a','z','d','e'])
  });
  it("Should insert elements without removing anything", function() {
  	expect(splice(['a','b','c','d','e'], 1, 0, 'z')).toEqual(['a','z','b','c','d','e'])
  });
  it("Should insert at the end no matter how high the index is set", function() {
  	expect(splice(['a','b','c'], 99, 0, 'z')).toEqual(['a','b','c','z']);
  	expect(splice(['a','b','c'], 99, 1, 'z')).toEqual(['a','b','c','z']);
  })
  it("Should insert any number of arguments to be inserted", function() {
  	expect(splice(['a','b','c'], 99, 1, 'x','y','z')).toEqual(['a','b','c','x','y','z'])
  })
});