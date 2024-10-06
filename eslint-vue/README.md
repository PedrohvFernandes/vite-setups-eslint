# ESLint config  <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white">

## Whats included?

- Eslint
- eslint-plugin-vuejs-a11y;
- Prettier;
  - Does not have commas at the end;
-  *In this case, it is not necessary to create the .prettier file in the project root, as the eslintrc configured in this package already contains the exact settings for prettier.*
-  *Note: Remove the prettier extension and install the eslint extension*
- vue/vue3-strongly-recommended;
- Vue plugin;

## Commands suggestions(script in package.json)

```json
{
  "scripts": {
    "lint": "eslint . --ext ts,vue --report-unused-disable-directives --max-warnings 0",
    "lint:mysrc": "eslint ./src --max-warnings 0",
    "lint:fix": "eslint . --fix",
    "lint:fixmysrc": "eslint src/**/*.{ts,vue} --fix"
  }
}
```

## Setup

### Vue (Vite or CRA)

Install dependencies: 
```
npm i -D eslint @pedrohvfernandes/eslint-config-vue
```
Inside `.eslintrc.json`
```
{
  "extends": "@pedrohvfernandes/eslint-config-vue/vue"
}
```