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
## VSCode Configuration for Auto Formatting on Save

In some cases, it's necessary to enable the **Format on Save** option in your VSCode.

To do this:

1. Click on the **gear icon (⚙️)** in the bottom-left corner of VSCode.
2. Select **Settings**.
3. In the search bar, type: `Format on Save`.
4. Enable the **Format on Save** checkbox.

---

## Project Configuration

In the root directory of your project, create a folder named `.vscode`, and inside it, create a file named `settings.json` with the following configuration:

```json
{
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "always",
    "source.fixAll.eslint": "always"
  },
  "eslint.format.enable": true
}
```

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