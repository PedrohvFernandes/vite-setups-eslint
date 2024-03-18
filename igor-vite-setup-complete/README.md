# Notes and links

 ## Itens necessários

  ### 1 Parte: Configurando as Url e limpando o projeto
  - [ ] Instalar o Vite``` npm create vite@latest ou yarn create vite```
  - [ ] Apos criar o vite, dar ```npm install ou yarn install ou yarn``` para instalar as dependências
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
    e por fim de um ```npm uninstall eslint-plugin-react-refresh ou yarn remove eslint-plugin-react-refresh``` para desinstalar o eslint-plugin-react-refresh
  - [ ] Vamos instalar o ```npm i @types/node -D ou yarn add -D @types/node```, para utilizar alguns types do node dentro do *vite.config.ts*
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
    ? Which package manager do you want to use ? npm/yarn
    ```
  - [ ] Instalar os demais plugins do eslint, para o projeto:
    ``` 
    npm i eslint-plugin-react-hooks eslint-plugin-import-helpers eslint-plugin-no-only-tests eslint-plugin-storybook -D ou yarn add eslint-plugin-react-hooks eslint-plugin-import-helpers eslint-plugin-no-only-tests eslint-plugin-storybook -D
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
    npm i -D prettier ou yarn add -D prettier
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
    npm i -D eslint-config-prettier eslint-plugin-prettier ou yarn add -D eslint-config-prettier eslint-plugin-prettier
    ```
  - [ ] Coloque o prettier no eslint
  - [ ] Crie o arquivo .prettierignore para ignorar alguns arquivos
  - [ ] Lembrando que pra aplicar as configs do prettier basta dar um ``` CTRL + S ```
  - [ ] Toda vez que mudar algo no projeto e não sentir uma reação do eslint, basta dar um CTRL + SHIFT + P> digitar reload window e clicar em Developer: Reload Window
  - [ ] Caso o Eslint ou Prettier não esteja apontando erros rode o comando: para ver se tem algum erro no código:
    *Vite*:
    ```
    npm run lint:vite ou yarn run lint:vite
    ```
    *Next*:
    ```
    npm run eslint
    ```
  - [ ] Aparentemente estava dando algum problema, no meu eslint: Por ele ser um json, é importante que não tenha virgulas no final de cada linha, então remova as virgulas no final de cada linha do arquivo *.eslintrc.json*, e o prettier estava com algum problema de versão, com isso dei um ```npm i eslint-plugin-prettier@latest --save-exact```
  - [ ] Erro das virgulas:
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
      Links que me ajudaram: [typeerror-prettier-resolveconfig-sync-is-not-a-function](https://stackoverflow.com/questions/76624993/prettier-3-0-0-typeerror-prettier-resolveconfig-sync-is-not-a-function) ```npm i eslint-plugin-prettier@latest --save-exact ou yarn add``` e [JS Error when unticking "Show arrow" in views: Expected double-quoted property name in JSON expected-double-quoted-property-name-in-json-at-position-1781](https://www.drupal.org/project/gliderjs/issues/3378680)
  - [ ] Build --> vamos tirar o tsc, o tsc nada mais é que um typecheck, e para evitar que o build quebre com arquivos que não fazem parte src, que são arquivos de config, vamos separar o build do typecheck, para isso vamos para o *package.json* e vamos criar um script chamado *typecheck*
  - [ ] Lint --> Vamos criar um script chamado *lint* para rodar o eslint. O proprio vite ja cria: ```npm run eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0 ou yarn run```, mas vamos criar o nosso ```eslint src --max-warnings=0``` ele vai verificar os erros da minha aplicação, e agora o lint fix --> ```eslint src --fix``` --> Ele resolve problemas encontrados. ```.``` --> Raiz do projeto, *src* --> Pasta src, *--ext ts,tsx* --> Extensão dos arquivos que ele vai verificar, *--report-unused-disable-directives* --> Reportar diretivas de desabilitação não utilizadas, *--max-warnings 0* --> Não permitir warnings
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
  - [ ] Depois basta rodar o storybook: ```npm run storybook ou yarn run storybook```
  - [ ] De um ```npm i @storybook/addon-actions @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-links @storybook/builder-vite @storybook/react @storybook/testing-library @storybook/react-vite -D ou yarn add @storybook/addon-actions @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-links @storybook/builder-vite @storybook/react @storybook/testing-library @storybook/react-vite -D ou yarn add @storybook/addon-actions @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-links @storybook/builder-vite @storybook/react @storybook/testing-library @storybook/react-vite -D``` para instalar as dependências do storybook
  - [ ] De um ```npm uninstall @chromatic-com/storybook @storybook/addon-onboarding @storybook/blocks --force ou yarn remove @chromatic-com/storybook @storybook/addon-onboarding @storybook/blocks ou yarn remove @chromatic-com/storybook @storybook/addon-onboarding @storybook/blocks```
  ### 4 Parte: Configurando o Styled-components e o Preview do Storybook
  - [ ] Vamos instalar o styled-components
    ```
    npm i styled-components ou yarn add styled-components
    ```
    ```
    npm i @types/styled-components -D ou yarn add -D @types/styled-components
    ```
  - [ ] Agora iremos criar pasta *types* e *styles*. Os types basicamente a onde eu chamar meu theme, o TS vai saber o que eu defini no meu theme, e o styles é onde eu vou colocar meus estilos globais e reset
  - [ ] Uma demonstração na pasta componentes/content
  - [ ] Agora vamos configurar o styled-components no storybook. Default do Preview.ts:
    ```
    import type { Preview } from '@storybook/react'

    const preview: Preview = {
      parameters: {
        controls: {
          matchers: {
            color: /(background|color)$/i,
            date: /Date$/i
          }
        }
      }
    }

    export default preview
    ```
    Passamos ele para *.jsx*:
    ```
    import { ThemeProvider } from 'styled-components'


      import RestStyles from 'styles/resets'
      import theme from 'styles/theme'

      export const parameters = {
        actions: { argTypesRegex: '^on[A-Z].*' }
      }

      export const decorators = [
        (Story) => (
          <ThemeProvider theme={theme}>
            <RestStyles />
            <Story />
          </ThemeProvider>
        )
      ]
    ```
    Se for passar para *.tsx*:
    ```
    import RestStyles from '../src/styles/resets'
    import theme from '../src/styles/theme'
    ```
  - [ ] Por ultimo para acelerar as dependências no vite, vamos para o *vite.config.ts* e coloque
      ```
      optimizeDeps: {
        disabled: false
      },
      ```
      Dessa forma, quando iniciamos o storybook o vite não precisa ficar verificando as dependências, ele já vai saber quais são as dependências que ele precisa carregar, e isso vai acelerar o carregamento do storybook
  ### 5 e 6 Parte: Configurando testes unitários com Jest e Playwright

  - [ ] Vamos começar pelo *tsconfig.json* colocando os includes
  - [ ] Depois criar o arquivo *jest.config.js*
  - [ ] Depois o arquivo de setup *.jest>setup.ts*
  - [ ] De um: 
      ```
      npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-plugin-styled-components @playwright/test @testing-library/jest-dom @testing-library/react @testing-library/react-hooks @testing-library/user-event @types/jest jest jest-unit jest-environment-jsdom jest-styled-components babel-loader babel-jest ou yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-plugin-styled-components @playwright/test @testing-library/jest-dom @testing-library/react @testing-library/react-hooks @testing-library/user-event @types/jest jest jest-unit jest-environment-jsdom jest-styled-components babel-loader babel-jest
      ```
      Aparentemente o react-hooks e outras libs  esta dando conflito com react, então vamos instalar o react-hooks separado: [link que me ajudou](https://github.com/npm/cli/issues/2120)
      ```bash
      npm i --save-dev @testing-library/react-hooks babel-plugin-styled-components babel-loader babel-jest --force

      ou

      npm i --save-dev @testing-library/react-hooks babel-plugin-styled-components babel-loader babel-jest --legacy-peer-deps

      ou

      yarn add --dev @testing-library/react-hooks babel-plugin-styled-components babel-loader babel-jest
      ```
  - [ ] Depois vamos criar o script/comando de test no *package.json*
      ```
      "test": "jest --maxWorkers=50% --coverage=false",
      "test:coverage": "jest --maxWorkers=50% --coverage",
      ```
        Um é com coverage, que basicamente é a cobertura de testes, e o outro é sem coverage. Tipo um teste rápido e um teste completo
  - [ ] Depois o babel: *.babelrc*
  - [ ] Criamos agora uma pasta utils e dentro dele um arquivo *test-utils.tsx*, é ele quem vai lidar com a parte de englobar os testes com o provider do styled-components e ter as outras partes do test-library
  - [ ] Dentro do counter, no Span colocamos um *data-testid="counter-view"* para podermos testar
  - [ ] Depois escrevemos um test
  - [ ] Caso de esse erro em algum *test.tsx*: 
      ```bash
        'toBeInTheDocument' does not exist on type 'JestMatchers<HTMLElement>', faça isso em *tsconfig.json*:
      ```
      ```
      "types": ["@testing-library/jest-dom"]
      ```
      Para que o ts entenda que estamos pegando um metodo do jest-dom ['toBeInTheDocument' does not exist on type 'JestMatchers<HTMLElement>'](https://github.com/testing-library/jest-dom/issues/546) porque em *.jest>setup* estamos passando essa lib para que nos testes não precise ficar importando a mesma lib. Basicamente o ts so vai dizer que o expect possui metodos dessa lib.

      > Obs: mesmo que o ts não encontrava a função no expect, o teste rodava numa boa dando `npm run test`, o problema era só na tipação que o TS estava tendo dificuldade para encontrar.
  - [ ] Agora vamos para o Playwright, vamos instalar o playwright
      ```bash
      npm init playwright@latest ou yarn create playwright
      ```
      Ele vai fazer umas perguntas:
      ```
      Where to put your end-to-end tests? e2e
      ? Add a GitHub Actions workflow? false
      ? Install Playwright browsers (can be done manually via 'npx playwright install')? Yes
      ```
      Caso quando ele comece a instalar alguns browser de um
      ```bash
      npm init playwright@latest --force
      ```
  - [ ] Depois adicione em *tsconfig.json* o *playwright*: Para que o process no *playwright.config* seja reconhecido
      ```
       "include": [
        "playwright.config.ts",
      ],
      ```
  - [ ] Mudei o projeto para yarn, com o npm estava precisando usar o *--force* para instalar as libs, com o yarn não foi necessário 
  - [ ] Depois vamos adicionar o scripts:
    ```bash
      # Nesse primeiro escolhemos qual navegador vamos rodar -> chromium
      "test:playwright": "playwright test --headed --config=playwright.config.ts --project=chromium"
      # Nesse segundo ele abre o codegen e mostra o espec das coisas, de como fica os nossos testes
      "test:playwright:helper": "npx playwright codegen http://localhost:3000"
    ```
  - [ ] Pode exclui a pasta *test-examples*
  - [ ] Agora damos um ```yarn dev``` e depois um ```yarn test:playwright``` para rodar os testes, um teste de exemplo, basta criar um teste na raiz do *e2e* e rodar o comando de testes:
  ```bash
  # example.spec.ts 
  import { test, expect } from '@playwright/test'

  test('get started link', async ({ page }) => {
    // Ele abre a pagina
    await page.goto('http://localhost:3000')

    // Ele olha o counter-view
    await expect(page.getByTestId('counter-view')).toBeVisible()
    // Inicialmente 0
    await expect(page.getByTestId('counter-view')).toHaveText('0')

    // Click
    await page.getByRole('button', { name: /Click me!/i }).click()

    // Agora o counter-view deve ser 1
    await expect(page.getByTestId('counter-view')).toHaveText('1')

    await page.pause()
  })

  ```
  - [ ] Agora vamos deixar algo com mais manutenibilidade(de manter o código mais tempo e de organização), em *e2e*, criamos o *components* e *tests*, e na raiz da *e2* criamos dois arquivos de config um do *vite* e outro do *tsconfig*, fazendo assim uma ramificação dos testes, separando do ambiente principal
  - [ ] Apos isso criamos o *counter* dentro de components, dessa forma padronizamos o test do counter, criando uma class, recebe a page, e dentro dele criamos os métodos, que serão os testes referente aquele componente, e no arquivo de teste em *tests* chamamos a class e passamos a page, e chamamos os métodos, dessa forma padronizamos os testes, com isso, os arquivos de testes ficam so responsáveis por chamar os métodos ex: *counter.spec.ts*, e os métodos ficam responsáveis por fazer os testes referente aquele componente, ex: *counter.ts*. Ta mas cade o componente nesses arquivos? basicamente ele não esta ai diretamente, o testamos de acordo com a rota, como não temos pagina algum então passamos a home ```./``` e nela procuramos o getByTestId --> *counter-view* e fazemos os testes referente a ele, que é o counter, dentro ```./``` possui um button, clicamos nele através do getByRole, e depois verificamos se o counter-view esta com o texto 1, e por fim damos um pause para ver o que aconteceu. Com isso, os spec fica menor, fica mais simples de entender cada passo, ele fica somente responsável para chamar os métodos para testar o componente, e o componente fica responsável de fazer os métodos dos testes. Ex: o método happyPath() testado nos spec é responsável por fazer o teste principal, mas é um teste vindo do component.

  ### Build setup

    > Eslint (+Prettier), Storybook, Styled-components, Jest e Playwright

    ```bash
    # install dependencies
    npm install or yarn

    # run the tests
    npm test or yarn test

    # run the e2e tests
    npm run test:playwright or yarn test:playwright

    # storybook
    npm run storybook or yarn storybook
    ```
  - [ ] Para mais duvidas so seguir o video que está no inicio do repositório


   ## Links
   
  <p>
  <a href="https://vitejs.dev/guide/" target="_blank">
    <img height="25" src="https://img.shields.io/badge/Vite-lib?style=flat&color=blue">
  </a>

  <a href="https://storybook.js.org" target="_blank">
    <img height="25" src="https://img.shields.io/badge/Storybook-lib?style=flat&color=blue">
  </a>

  <a href="https://playwright.dev" target="_blank">
    <img height="25" src="https://img.shields.io/badge/Playwright-lib?style=flat&color=blue">
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





