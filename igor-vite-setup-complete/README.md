# Notes and links

 ## Itens necessários

  ### 1 Parte: Configurando as Url e limpando o projeto
  - [ ] Instalar o Vite``` npm create vite@latest ```
  - [ ] Apos criar o vite, dar ```npm install``` para instalar as dependências
  - [ ] Depois retire arquivos inúteis que ele criou: Assets, App.css, index.css, e dentro do App.tsx limpe ele, deixando apenas o seguinte código:
    ``` 
    export function App() {

      return (
        <>
          Hey!
        </>
      )
    }

    ```
    No main:
    ```
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { App } from './App';

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
    ```
    e por fim de um ```npm uninstall eslint-plugin-react-refresh``` para desinstalar o eslint-plugin-react-refresh
  - [ ] Vamos instalar o ```npm i @types/node -D```, para utilizar alguns types do node dentro do *vite.config.ts*
  - [ ] Depois configuramos o vite.config.ts
  - [ ] Como configuramos no vite as urls dos arquivos, o TS precisa entender também, basta passar a *baseUrl* e *paths*

  ### 2 Parte: Configurando o Eslint e Prettier
  - [ ] Baixar a extensão do Eslint no vscode
  - [ ] No video ele pede para instalar, mas você pode integrar o prettier dentro do eslint para não baixar a extensão do Prettier no vscode, pois ja vamos ter no eslint o prettier.
  - [ ] Instalar o eslint(No vite eslint ja vem) e seus plugins
  - [ ] Mas caso queira reinstalar ou colocar o arquivo do eslint no default, de ```npx eslint --init``` e escolher as opções que deseja, para esse projeto eu escolhi as seguintes opções:
    ``` 
    ? How would you like to use ESLint? To check syntax, find problems
    ? What type of modules does your project use? JavaScript modules (import/export)
    ? Which framework does your project use? React
    ? Does your project use TypeScript? Yes
    ? Where does your code run? Browser
    ? What format do you want your config file to be in? JSON
    ? Would you like to install them now? yes
    ? Which package manager do you want to use ? npm
    ```
  - [ ] Instalar os demais plugins do eslint, para o projeto:
    ``` 
    npm i eslint-plugin-react-hooks eslint-plugin-import-helpers eslint-plugin-no-only-tests eslint-plugin-storybook -D
    ```
    No vite ja vem os seguintes plugins, então não precisa instalar:
    ```
    1. eslint-plugin-react-hooks
    ```
  - [ ] Configurar o arquivo *.eslintrc.json* para o projeto. Configuração inicial default do eslint:
    ```
        {
        "env": {
            "browser": true,
            "es2021": true
        },
        "extends": [
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:react/recommended"
        ],
        "parser": "@typescript-eslint/parser",
        "parserOptions": {
            "ecmaVersion": "latest",
            "sourceType": "module"
        },
        "plugins": [
            "@typescript-eslint",
            "react"
        ],
        "rules": {
        }
    }

    ```
  - [ ]  Configuração final  do *.eslintrc.json*:
    ```
        {
      "env": {
        "browser": true,
        "es2020": true,
        "jest": true,
        "node": true
      },
      "settings": {
        "react": {
          "version": "detect"
        }
      },
      "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:storybook/recommended"
      ],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "ecmaFeatures": {
          "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
      },
      "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "eslint-plugin-import-helpers",
        "no-only-tests"
      ],
      "rules": {
        "import-helpers/order-imports": [
          "warn",
          {
            "newlinesBetween": "always", // new line between groups
            "groups": [
              "module",
              [
                "/^components/",
                "/^types/"
                // tu pode colocar todos os seus folders aqui
              ],
              "/styles.*/",
              ["parent", "sibling", "index"],
              "/\\.\\/styles/"
            ],
            "alphabetize": {
              "order": "asc",
              "ignoreCase": true
            }
          }
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "no-console": "warn",
        "no-only-tests/no-only-tests": ["error"]
      },
      "overrides": [
        {
          "files": ["src/graphql/generated/*.ts"],
          "rules": {
            "@typescript-eslint/no-explicit-any": "off"
          }
        }
      ]
    }

    ```
  - [ ] De um reload a toda config que você fizer no vscode, para isso de um ``` CTRL + SHIFT + P ``` e digite ``` reload window ``` e clique em ``` Developer: Reload Window ```
  - [ ] Crie o .eslintignore para ignorar alguns arquivos
  - [ ] Depois vamos forçar umas configurações do vscode. Pasta .vscode/settings.json
    ```
    {
      "editor.formatOnSave": true,
      "editor.codeActionsOnSave": {
        // "source.fixAll": true,
        // "source.fixAll.eslint": true,
        "source.fixAll": "explicit",
        "source.fixAll.eslint": "explicit",
      },
      "eslint.format.enable": true
    }
    ```
  - [ ] Instalar prettier 
    ```
    npm i -D prettier
    ```
  - [ ] Criar e Configurar o arquivo .prettierrc.json. Nesse projeto as configurações do prettier ficaram nesse arquivo, enquanto o da rocket diretamente no eslint:
    ```
    {
      "trailingComma": "none",
      "semi": false,
      "singleQuote": true
    }
    ```
    Explicando cada item:
    ```
    1. trailingComma: "none" --> Não coloca virgula no final do objeto
    2. semi: false --> Não coloca ponto e virgula no final da linha
    3. singleQuote: true --> Coloca aspas simples
    ```
  - [ ] Agora a integração do prettier com o eslint, para isso vamos instalar o plugin do prettier no eslint
    ```
    npm i -D eslint-config-prettier eslint-plugin-prettier
    ```
  - [ ] Coloque o prettier no eslint
  - [ ] Crie o arquivo .prettierignore para ignorar alguns arquivos
  - [ ] Lembrando que pra aplicar as configs do prettier basta dar um ``` CTRL + S ```
  - [ ] Toda vez que mudar algo no projeto e não sentir uma reação do eslint, basta dar um CTRL + SHIFT + P> digitar reload window e clicar em Developer: Reload Window
  - [ ] Caso o Eslint ou Prettier não esteja apontando erros rode o comando: para ver se tem algum erro no código:
    *Vite*:
    ```
    npm run lint
    ```
    *Next*:
    ```
    npm run eslint
    ```
  - [ ] Aparentemente estava dando algum problema, no meu eslint: Por ele ser um json, é importante que não tenha virgulas no final de cada linha, então remova as virgulas no final de cada linha do arquivo *.eslintrc.json*, e o prettier estava com algum problema de versão, com isso dei um ```npm i eslint-plugin-prettier@latest --save-exact```
  -[ ] Erro das virgulas:
    ```
      npm run lint  

      > igor-vite-setup-complete@0.0.0 lint
      > eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0


      Oops! Something went wrong! :(

      ESLint: 8.57.0

      Failed to read JSON file at C:\Users\Pedro\OneDrive\Documentos\GitHub\vite-setups-eslint\igor-vite-setup-complete\.eslintrc.json:

      Cannot read config file: C:\Users\Pedro\OneDrive\Documentos\GitHub\vite-setups-eslint\igor-vite-setup-complete\.eslintrc.json
      Error: Expected double-quoted property name in JSON at position 1781
    ```
    Erro da versão:
    ```
     npm run lint

    > igor-vite-setup-complete@0.0.0 lint
    > eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0


    Oops! Something went wrong! :(

    ESLint: 8.57.0

    TypeError: prettier.resolveConfig.sync is not a function
    Occurred while linting C:\Users\Pedro\OneDrive\Documentos\GitHub\vite-setups-eslint\igor-vite-setup-complete\src\App.tsx:1
    Rule: "prettier/prettier"
        at Program (C:\Users\Pedro\OneDrive\Documentos\GitHub\vite-setups-eslint\igor-vite-setup-complete\node_modules\eslint-plugin-prettier\eslint-plugin-prettier.js:138:40)
        at ruleErrorHandler (C:\Users\Pedro\OneDrive\Documentos\GitHub\vite-setups-eslint\igor-vite-setup-complete\node_modules\eslint\lib\linter\linter.js:1076:28)
        at C:\Users\Pedro\OneDrive\Documentos\GitHub\vite-setups-eslint\igor-vite-setup-complete\node_modules\eslint\lib\linter\safe-emitter.js:45:58
        at Array.forEach (<anonymous>)
        at Object.emit (C:\Users\Pedro\OneDrive\Documentos\GitHub\vite-setups-eslint\igor-vite-setup-complete\node_modules\eslint\lib\linter\safe-emitter.js:45:38)
        at NodeEventGenerator.applySelector (C:\Users\Pedro\OneDrive\Documentos\GitHub\vite-setups-eslint\igor-vite-setup-complete\node_modules\eslint\lib\linter\node-event-generator.js:297:26)
        at NodeEventGenerator.applySelectors (C:\Users\Pedro\OneDrive\Documentos\GitHub\vite-setups-eslint\igor-vite-setup-complete\node_modules\eslint\lib\linter\node-event-generator.js:326:22)
        at NodeEventGenerator.enterNode (C:\Users\Pedro\OneDrive\Documentos\GitHub\vite-setups-eslint\igor-    at NodeEventGenerator.enterNode (C:\Users\Pedro\OneDrive\Documentos\GitHub\vite-setups-eslint\igor-vite-setup-complete\node_modules\eslint\lib\linter\node-event-generator.js:340:14)
        at CodePathAnalyzer.enterNode (C:\Users\Pedro\OneDrive\Documentos\GitHub\vite-setups-eslint\igor-vite-setup-complete\node_modules\eslint\lib\linter\code-path-analysis\code-path-analyzer.js:803:23)      
        at C:\Users\Pedro\OneDrive\Documentos\GitHub\vite-setups-eslint\igor-vite-setup-complete\node_modules\eslint\lib\linter\linter.js:1111:32
    ```
    Links que me ajudaram: [typeerror-prettier-resolveconfig-sync-is-not-a-function](https://stackoverflow.com/questions/76624993/prettier-3-0-0-typeerror-prettier-resolveconfig-sync-is-not-a-function) ```npm i eslint-plugin-prettier@latest --save-exact``` e [JS Error when unticking "Show arrow" in views: Expected double-quoted property name in JSON expected-double-quoted-property-name-in-json-at-position-1781](https://www.drupal.org/project/gliderjs/issues/3378680)
    - [ ] Build --> vamos tirar o tsc, o tsc nada mais é que um typecheck, e para evitar que o build quebre com arquivos que não fazem parte src, que são arquivos de config, vamos separar o build do typecheck, para isso vamos para o *package.json* e vamos criar um script chamado *typecheck*
    - [ ] Lint --> Vamos criar um script chamado *lint* para rodar o eslint. O proprio vite ja cria: ```npm run eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0```, mas vamos criar o nosso ```eslint src --max-warnings=0``` ele vai verificar os erros da minha aplicação, e agora o lint fix --> ```eslint src --fix``` --> Ele resolve problemas encontrados. *.* --> Raiz do projeto, *src* --> Pasta src, *--ext ts,tsx* --> Extensão dos arquivos que ele vai verificar, *--report-unused-disable-directives* --> Reportar diretivas de desabilitação não utilizadas, *--max-warnings 0* --> Não permitir warnings
    ```
    "lint:vite": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:my": "eslint . --max-warnings 0",
    "lint:fix": "eslint . --fix",
    "lint:mysrc": "eslint ./src --max-warnings 0",
    ```
  ### 3 Parte: Configurando o Storybook
  - [ ] Inicialmente vamos instalar o storybook: ```npx sb init``` ou ```npx storybook init```
  - [ ] So ir dando enter
  - [ ] Depois vamos alterar a configuração do storybook
  - [ ] Config padrão inicial:
    ```
    import type { StorybookConfig } from '@storybook/react-vite'

    const config: StorybookConfig = {
      stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
      addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions'
      ],
      framework: {
        name: '@storybook/react-vite',
        options: {}
      },
      docs: {
        autodocs: 'tag'
      }
    }
    export default config

    ```
  - [ ] Configuração final do storybook: Para *main.ts*:
    ```
    import { mergeConfig } from 'vite'
    import type { StorybookConfig } from '@storybook/react-vite'

    const config: StorybookConfig = {
      stories: ['../src/**/stories.@(ts|tsx)'],
      addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
      ],
      framework: {
        name: '@storybook/react-vite',
        options: {}
      },
      core: {
        builder: '@storybook/builder-vite'
      },
      // features: {
      //   storyStoreV7: true
      // },
      features: {
        // https://storybook.js.org/docs/api/main-config-features
        argTypeTargetsV7: true
      },
      docs: {
        autodocs: 'tag'
      },

      async viteFinal(config) {
        return mergeConfig(config, {
          resolve: {
            alias: {
              components: `/src/components/`,
              styles: `/src/styles/`,
              types: `/src/types/`,
              utils: `/src/utils/`
            }
          }
        })
      }
    }
    export default config

    module.exports = {


      framework: '@storybook/react',



    }
    ```
  - [ ] Configuração do storybook do igor: Para *main.cjs*
    ```
    const { mergeConfig } = require('vite')

      module.exports = {
        stories: ['../src/**/stories.@(ts|tsx)'],
        addons: [
          '@storybook/addon-links',
          '@storybook/addon-essentials',
          '@storybook/addon-interactions'
        ],
        framework: '@storybook/react',
        core: {
          builder: '@storybook/builder-vite'
        },
        features: {
          storyStoreV7: true
        },
        async viteFinal(config) {
          return mergeConfig(config, {
            resolve: {
              alias: {
                components: `/src/components/`,
                styles: `/src/styles/`,
                types: `/src/types/`,
                utils: `/src/utils/`
              }
            }
          })
        }
      }
    ```
  - [ ] Para testar foi criado um stories dentro do counter
  - [ ] Depois basta rodar o storybook: ```npm run storybook```
  - [ ] Para mais duvidas so seguir o video que está no inicio do repositório


   ## Links
   
  <p>
  <a href="https://vitejs.dev/guide/" target="_blank">
    <img height="25" src="https://img.shields.io/badge/Vite-lib?style=flat&color=blue">
  </a>

  <a href="https://storybook.js.org" target="_blank">
    <img height="25" src="https://img.shields.io/badge/Storybook-lib?style=flat&color=blue">
  </a>

  <a href="https://prettier.io/docs/en/install" target="_blank">
    <img height="25" src="https://img.shields.io/badge/Prettier-lib?style=flat&color=blue">
  </a>

  <a href="https://eslint.org" target="_blank">
    <img height="25" src="https://img.shields.io/badge/Eslint-lib?style=flat&color=blue">
  </a>
 
  <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank">
    <img height="25" src="https://img.shields.io/badge/extensão do Eslint no vscode-extension?style=flat&color=blue">
  </a>
    
  <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank">
    <img height="25" src="https://img.shields.io/badge/extensão do Prettier-Extension?style=flat&color=blue">
  </a>

   <a href="https://dev.to/coderamos/hierarquia-de-imports-56j6" target="_blank">
    <img height="25" src="https://img.shields.io/badge/Como organizar os imports-lib?style=flat&color=blue">
  </a>
    
  </p>





