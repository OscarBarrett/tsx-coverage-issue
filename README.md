# TSX Coverage issue

```bash
yarn
cd tsx-4.2.1 && yarn && cd ..
```

Output:
```bash
yarn test

yarn run v1.22.18
$ c8 tsx bin/test.ts

tests/maths.spec.ts
  ✔ add (2.17ms)

 PASSED

Tests  1 passed (1)
 Time  4ms
------------------------|---------|----------|---------|---------|-------------------
File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------------|---------|----------|---------|---------|-------------------
All files               |     100 |      100 |     100 |     100 |
 tsx-coverage-issue     |     100 |      100 |     100 |     100 |
  index.ts              |     100 |      100 |     100 |     100 |
 tsx-coverage-issue/bin |     100 |      100 |     100 |     100 |
  test.ts               |     100 |      100 |     100 |     100 |
------------------------|---------|----------|---------|---------|-------------------
Done in 0.60s.
```

```bash
yarn test-tsx-421

yarn run v1.22.18
$ c8 tsx-4.2.1/node_modules/.bin/tsx bin/test.ts

tests/maths.spec.ts
  ✔ add (2.57ms)

 PASSED

Tests  1 passed (1)
 Time  4ms
------------------------|---------|----------|---------|---------|-------------------
File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------------|---------|----------|---------|---------|-------------------
All files               |   88.23 |      100 |   66.66 |   88.23 |
 tsx-coverage-issue     |   71.42 |      100 |   66.66 |   71.42 |
  index.ts              |   71.42 |      100 |   66.66 |   71.42 | 6-7
 tsx-coverage-issue/bin |     100 |      100 |     100 |     100 |
  test.ts               |     100 |      100 |     100 |     100 |
------------------------|---------|----------|---------|---------|-------------------
Done in 0.67s.
```
