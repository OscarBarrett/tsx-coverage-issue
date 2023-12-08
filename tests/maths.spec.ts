import { add, subtract } from '../index.js';

import { test } from '@japa/runner';

test('add', ({ expect }) => {
  expect(add(1, 1)).toBe(2);
});

// test('subtract', ({ expect }) => {
//   expect(subtract(1, 1)).toBe(0);
// });
