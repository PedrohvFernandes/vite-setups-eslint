module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue', 'vuejs-accessibility'],
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
        endOfLine: 'auto',
      },
    ],
    // Em vez de usar o prettier:
    /*
     semi: ['error', 'always'],
     quotes: ['error', 'single'],
     indent: ['error', 2],
     'comma-spacing': ['error', { before: false, after: true }],
     'vue/no-multi-spaces': 1,
     */
    // 'vuejs-accessibility/rule-name': 'error',

    'vuejs-accessibility/alt-text': [
      'error',
      {
        elements: ['img', 'object', 'area', 'input[type="image"]'],
        img: ['Image'],
        object: ['Object'],
        area: ['Area'],
        'input[type="image"]': ['ImageInput'],
      },
    ],
    'vuejs-accessibility/aria-props': 'error',
    'vuejs-accessibility/aria-role': ['error', { ignoreNonDOM: true }],
    'vuejs-accessibility/aria-unsupported-elements': 'error',
    "vue/multi-word-component-names": "off",
    "vue/require-default-prop": "off"
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: [`.ts`, `.vue`, `.d.ts`],
    },
  },
  ignorePatterns: ['node_modules'],
}
