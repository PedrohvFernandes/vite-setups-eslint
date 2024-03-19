module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['standard', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers', 'no-only-tests'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
        endOfLine: 'auto'
      }
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        'newlinesBetween': 'always',
        'groups': [
          '/module/', // Importações de módulos do Node.js
          '/external/', // Importações de pacotes externos
          '/@shared/', // Importações correspondentes ao padrão @shared
          '/absolute/', // Importações correspondentes ao padrão absolute
          ['parent', 'sibling', 'index'], // Importações locais
          '/object/', // Importações de objetos de módulos
          '/type/', // Importações de interfaces e types
          '/builtin/' // Importações de módulos do Node.js Core
        ],
        'alphabetize': { 'order': 'asc', 'ignoreCase': true }
      }
    ],
    'no-only-tests/no-only-tests': [
      'error'
    ]
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts']
    }
  }
}