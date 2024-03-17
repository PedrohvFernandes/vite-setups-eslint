# Notes and links

 ## Itens necessários
  - [ ] Instalar o Vite(Ou se preferir o next) ``` npm create vite@latest ```
  - [ ] Apos criar o vite, dar ```npm install``` para instalar as dependências
  - [ ] Baixar a extensão do Eslint no vscode
  - [ ] Para essa config não baixe a extensão do Prettier no vscode, pois ja vamos instalar o prettier como dependência do eslint, se baixar a extensão vai ter conflito. Se não quiser desinstalar, so desabilitar a extensão.
  - [ ] Instalar o eslint(No vite e next o eslint ja vem) e seus plugins
  - [ ] Mas queira reinstalar ou colocar o arquivo do eslint no default, de ```npx eslint --init``` e escolher as opções que deseja, para esse projeto eu escolhi as seguintes opções:
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
    npm i eslint-plugin-react-hooks eslint-plugin-import-helpers -D
    ```
    No vite ja vem os seguintes plugins, então não precisa instalar:
    ```
    1. eslint-plugin-react-hooks
    ```
    O hooks porque vamos trabalhar com hooks no react. Um exemplo o useEffect quando usamos alguma propriedade/estado do react dentro dele, ele pede para colocar no array de dependências, e o eslint vai apontar isso. Entre outras regras do hooks do react.

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
  - [ ] Se dermos no next um ``` npm run eslint src ``` ou no vite ```npm run lint src``` ele vai apontar esse erro:
    ```
    Warning: React version not specified in eslint-plugin-react settings. See https://github.com/jsx-eslint/eslint-plugin-react#configuration .
    ```
    Esse erro é devido porque temos que especificar a versão do react no eslint, para ele saber qual versão do react estamos usando. Para isso vamos adicionar a seguinte configuração no arquivo *.eslintrc.json*


  - [ ] Instalar prettier 
    ```
    npm i -D prettier
    ```
  - [ ] Criar e Configurar o arquivo .prettierrc. Nesse projeto as configurações do prettier ficaram nesse arquivo, enquanto o da rocket diretamente no eslint:
    ```
    {
      "trailingComma": "none",
      "semi": true,
      "singleQuote": true
    }
    ```

    Explicando cada item:
    ```
    1. trailingComma: "none" --> Não coloca virgula no final do objeto
    2. semi: true --> Coloca ponto e virgula no final de cada linha
    3. singleQuote: true --> Coloca aspas simples
    ```
  - [ ] Agora a integração do prettier com o eslint, para isso vamos instalar o plugin do prettier no eslint
    ```
    npm i -D eslint-config-prettier eslint-plugin-prettier
    ```
  - [ ] Coloque o prettier no eslint
  - [ ] Depois vamos forçar umas configurações do vscode. Pasta .vscode/settings.json
    ```
    {
      "editor.formatOnSave": false,
      "editor.codeActionsOnSave": {
        // "source.fixAll.eslint": true
        "source.fixAll.eslint": "explicit"
      }
    }
    ```
  - [ ] Lembrando que pra aplicar as configs do prettier basta dar um ``` CTRL + S ```
  - [ ] Configurando o plugin ``` eslint-plugin-import-helpers ``` no arquivo *eslintrc.json*
  - [ ] De um reload a toda config que você fizer no vscode, para isso de um ``` CTRL + SHIFT + P ``` e digite ``` reload window ``` e clique em ``` Developer: Reload Window ``` 
  - [ ] Depois no *tsconfig.json*, adicione a seguinte configuração: Para resolver a questão de imports ex: ``` import Button from '../../components/Button' ``` para ``` import Button from 'components/Button' ```
    ```
    "baseUrl": "src"
    "paths": {
      "@/*": ["./src/*"]
    }
    ```
  - [ ]  Configuração final  do *.eslintrc.json*:
    ```
    {
        "env": {
            "browser": true,
            "es2021": true
        },
        // Informando a versão do React
        "settings": {
            "react": {
                "version": "detect"
            }
        },
        "extends": [
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:react/recommended",
            "plugin:prettier/recommended",
            "prettier"
        ],
        "parser": "@typescript-eslint/parser",
        "parserOptions": {
            "ecmaVersion": "latest",
            "sourceType": "module"
        },
        "plugins": [
            "@typescript-eslint",
            "react",
            "react-hooks",
            "eslint-plugin-import-helpers"
        ],
        "rules": {
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            // Desabilitando a regra que obriga a importação do React em arquivos J(T)SX
            "react/react-in-jsx-scope": "off",
            "prettier/prettier": [
                "error",
                {
                    "endOfLine": "auto"
                }
            ],
            // Ele ordena nossos imports
            "import-helpers/order-imports": [
                "warn",
                {
                    "newlinesBetween": "always",
                    // Tudo que vem do react tem que vim primeiro, se tiver next, vem depois /^next/, "/@next/". Aqui basicamente definimos a ordem dos imports
                    "groups": [
                        ["/^react/"],
                        "/components/",
                        "/module/",
                        "/^@shared/", 
                        "/absolute/",
                        ["parent","sibling", "index"],
                        "/routes/",
                        "/styles/"
                    ],
                    "alphabetize": { "order": "asc", "ignoreCase": true }
                }
            ]
        }
    }

    ```
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
  - [ ] Para mais duvidas so seguir o video que está no inicio do repositório


   ## Links
   
  <p>
  <a href="https://vitejs.dev/guide/" target="_blank">
    <img height="25" src="https://img.shields.io/badge/Vite-lib?style=flat&color=blue">
  </a>

  <a href="https://nextjs.org/docs/getting-started/installation" target="_blank">
    <img height="25" src="https://img.shields.io/badge/Next-lib?style=flat&color=blue">
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





