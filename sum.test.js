const { sum, prod, dividend } = require('./sum.js');

test('adds 2 and 3 to get 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('multiplies 2 and 3 to get 6', () => {
  expect(prod(2, 3)).toBe(6);
});

test('divides 10 and 5 to get 2', () => {
  expect(dividend(10, 5)).toBe(2);
});
