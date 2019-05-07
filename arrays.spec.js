describe('returnArray', () => {
  it('should return an array', () => {
    expect(Array.isArray(returnArray())).to.equal(true);
  });
  var arr = returnArray('item1', 'item2');
  it('should return an array containing the two arguments passed into returnArray', () => {
    expect(arr[0]).to.equal('item1');
  });
});

describe('returnItemAtArrayIndex', () => {
  it('should return the item on arr1 at the passed index', () => {
    expect(returnItemAtArrayIndex(2)).to.equal(3);
    expect(Array.isArray(returnItemAtArrayIndex(3))).to.equal(true);
  });
});
