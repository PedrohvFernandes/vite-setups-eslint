# ESLint config  <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white">

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;
-  *In this case, it is not necessary to create the .prettier file in the project root, as the eslintrc configured in this package already contains the exact settings for prettier.*
-  *Note: Remove the prettier extension and install the eslint extension*

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
### Dev Junior + Rocketseat + Igor React (Vite or CRA)

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