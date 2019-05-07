describe('arrayCopier', () => {
  const originalArray = ['1', '2', '3', '4', 'cow', '6'];
  it('should return an array', () => {
    expect(Array.isArray(arrayCopier(originalArray, '7'))).to.equal(true);
  });
  it('should not return the original array', () => {
    expect(arrayCopier(originalArray, '7')).to.not.equal(originalArray);
  });
  it('should return a copy of the original array with the new item added to the end', () => {
    expect(arrayCopier(originalArray, '7')).to.deep.equal([
      '1',
      '2',
      '3',
      '4',
      'cow',
      '6',
      '7',
    ]);
  });
});

describe('getFirstNItems', () => {
  const stringArr = ['1', '2', '3', '4', '5'];
  it('should return an array', () => {
    expect(Array.isArray(getFirstNItems(stringArr, 3))).to.equal(true);
  });
  it('should return an array containing only the first N items', () => {
    expect(getFirstNItems(stringArr, 2)).to.deep.equal(['1', '2', '3']);
  });
});
