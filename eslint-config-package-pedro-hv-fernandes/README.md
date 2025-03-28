# ESLint config  <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white">

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- No Only Tests plugin;
- Import Helpers Order Imports;
- JSX a11y plugin;
- Prettier;
  - Does not have commas at the end;
-  *In this case, it is not necessary to create the .prettier file in the project root, as the eslintrc configured in this package already contains the exact settings for prettier.*
-  *Note: Remove the prettier extension and install the eslint extension*
- TypeScript;

## Commands suggestions(script in package.json)

```json
{
  "scripts": {
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:mysrc": "eslint ./src --max-warnings 0",
    "lint:fix": "eslint . --fix",
    "lint:fixmysrc": "eslint src/**/*.{ts,tsx} --fix",
  }
}
```

## Setup

### React (with Next.js)

Install dependencies:
```
npm i -D eslint @pedrohvfernandes/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": [
    "@pedrohvfernandes/eslint-config/next", 
    "next/core-web-vitals"
  ]
}
```

### React (Vite or CRA)

Install dependencies: 
```
npm i -D eslint @pedrohvfernandes/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": "@pedrohvfernandes/eslint-config/react"
}
```

### Node.js

Install dependencies:
```
npm i -D eslint @pedrohvfernandes/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": "@pedrohvfernandes/eslint-config/node"
}
```
### My config: Dev Junior + Rocketseat + Igor React (Vite or CRA)

Install dependencies:
```
npm i -D eslint @pedrohvfernandes/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": "@pedrohvfernandes/eslint-config/myconfigreact"
}
```
### My config: Node.js

Install dependencies:
```
npm i -D eslint @pedrohvfernandes/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": "@pedrohvfernandes/eslint-config/myconfignode"
}
```