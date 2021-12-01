const puzzle1 = require('./puzzle-1');

describe('puzzle-1', () => {
  test('is function', () => 
    expect(typeof puzzle1 === 'function').toBe(true)
  );
  // TODO: return actual value
  test('returns promise of string', () => 
    puzzle1().then((inputStr) => typeof inputStr === 'string')
  );
});