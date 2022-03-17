# Getting started from scracth

## Documentation

- Mocha: https://mochajs.org/
- Chai: https://www.chaijs.com/

## STEPS

1. Create project folder
2. Create package.json

```shell
npm init -y
```

3. Install mocha and chai

```shell
npm install mocha chai --save-dev
```

4. In package.json file, change script test to mocha

```json
 "scripts": {
    "test": "mocha"
  },
```

5. create folder `test` in root folder for doing tests

6. write tests. **`ATENTION!`** use normal functions and not arrow functions. It is suggested in documentation

7. Run tests with `npm test`
