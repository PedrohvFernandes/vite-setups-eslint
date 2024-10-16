# ESLint config  <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white">

## Whats included?

- Eslint;
- Prettier;
  - Does not have commas at the end;
-  *In this case, it is not necessary to create the .prettier file in the project root, as the eslintrc configured in this package already contains the exact settings for prettier.*
-  *Note: Remove the prettier extension and install the eslint extension*
- Typescript;

## Commands suggestions(script in package.json)

```json
{
  "scripts": {
    "lint": "eslint . --ext ts --report-unused-disable-directives --max-warnings 0",
    "lint:mysrc": "eslint ./src --max-warnings 0",
    "lint:fix": "eslint . --fix",
    "lint:fixmysrc": "eslint src/**/*.{ts} --fix",
    "lint:general": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
  }
}
```

## Setup

### NestJs Node

Install dependencies: 
```
npm i -D eslint @pedrohvfernandes/eslint-config-nestjs
```
Inside `.eslintrc.json`
```
{
  "extends": "@pedrohvfernandes/eslint-config-nestjs/nestjs"
}
```

### Uninstall

```
npm uninstall eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier prettier
```