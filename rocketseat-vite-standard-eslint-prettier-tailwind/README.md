# Notes and links


  <a href="https://tailwindcss.com/docs/installation/using-postcss" target="_blank">
    <img height="25" src="https://img.shields.io/badge/Documentation installation postcss + tailwindcss-lib?style=flat&color=blue">
  </a>

 ## Itens necessários
  - [ ] Instalar o Vite
  - [ ] Apos criar o vite, dar ```npm install``` para instalar as dependências
  - [ ] Instalar o tailwindcss
  - [ ] Configurar o tailwindcss
  - [ ] Configurar o arquivo main.css
  - [ ] Instalar o postcss
  - [ ] Instalar o autoprefixer
  - [ ] Configurar o postcss passando o tailwindcss e o autoprefixer
  - [ ] Baixar a extensão do tailwindcss intelliSense no vscode
  - [ ] Baixar a extensão do Eslint no vscode
  - [ ] Para essa config não baixe a extensão do Prettier no vscode, pois ja vamos instalar o prettier como dependência do eslint, se baixar a extensão vai ter conflito. Se não quiser desinstalar, so desabilitar a extensão.
  - [ ] Instalar o eslint e seus plugins
  - [ ] Configurar o eslint e dentro dele o prettier
  - [ ] A pasta .vscode vai ter umas settings que forçam nesse projeto utilizar configurações importantes para o eslint funcionar, caso queira deixar isso global para sua conta do git basta dar um CTRL + SHIFT + P> digitar settings e clicar em Preferences: Open Settings (UI) e colar o conteúdo do arquivo settings.json que está na pasta .vscode ou ir no canto superior esquerdo arquivo/code>preferences>settings e colar o conteúdo do arquivo settings.json que está na pasta .vscode. Caso tenha duvida deixei uns prints na pasta de assets 
    ```
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
      "source.organizeImports": "explicit"
    }
    ```
    #### Para(Obs: aparentemente atualizou e tem que usar o explicit mesmo, mas para fins de estudo do video, ele usou o true, então vou deixar o true aqui, capaz que o próprio vscode mude sozinho apos você colocar true)
    ```
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.addMissingImports": true
    }
    ```
    É importante ter essas configurações para que o eslint e o prettier funcionem corretamente ao salvar o arquivo.

    #### Importante

    ```
    "editor.formatOnSave": true,
    ```
     Essa opção não pode estar globalmente ativada, se não ele vai ficar tentando formatar o seu código ao mesmo tempo que o Eslint tiver tentando formatar seu código.

     Obs: não tem problema se tiver usando para uma tecnologia especifica, como por exemplo prisma:
    ```
    "[prisma]": {
      "editor.formatOnSave": true,
      "editor.defaultFormatter": "Prisma.prisma"
    }
    ```
  - [ ] Instalar prettier e o plugin do prettier para o tailwindcss, para organizar minhas classes do tailwindcss. Obs: no pacote deles não possui o plugin: prettier-plugin-tailwindcss, então é necessário instalar manualmente, porque a pacote foi feito somente para instalar o eslint, o tailwindcss instala quem quiser. Config para padronizar o código com o TailwindCSS. Obs: O prettier do codigo ao todo fica integrado no eslint
    ```
    npm i -D prettier prettier-plugin-tailwindcss
    ```
  - [ ] Criar e Configurar o arquivo prettier.config.json
    ```
    {
      "plugins": ["prettier-plugin-tailwindcss"]
    }
    ```
    Ou .js, somente com o resolve funcionou
    ```
    module.exports = {
      plugins: [require.resolve('prettier-plugin-tailwindcss')],
    }
    ```
  - [ ] No video ele instala o package deles e usa direto no Eslint, mas nesse projeto meu aqui eu instalo lib por lib, e insiro os plugin por plugin baixado dentro do *.eslintrc.cjs*. Caso crie um pacote como ele, pode fazer o mesmo.([O meu pacote](https://www.npmjs.com/package/@pedrohvfernandes/eslint-config))
Instalando as dependências do pacotes deles, para um projeto React + Vite, se  tiver usando o next basta substituir o react por next.
    ``` 
      npm i -D eslint @rocketseat/eslint-config prettier-plugin-tailwindcss
    ```
    Inserindo dentro do *.eslintrc.json* com o uso do pacote deles
    ```
      {
        "extends": "@rocketseat/eslint-config/react"
      }
    ```
     Caso queira instalar tudo manualmente
     Instalando as dependências do pacotes deles manualmente, para um projeto React + Vite
    ``` 
      npm i prettier eslint-plugin-react-hooks eslint-plugin-react eslint-plugin-promise eslint-plugin-prettier eslint-plugin-n eslint-plugin-jsx-a11y eslint-plugin-import eslint-config-standard eslint-config-prettier eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
    ```
    Inserindo dentro do *.eslintrc.cjs* sem o uso do pacote deles, para Vite + react, para arquivos .cjs:
    ```
        module.exports = {
      env: {
        browser: true,
        es2021: true,
        jest: true,
      },
      extends: [
        // Plugin oficial do React, regras padrões da google
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        // Padrão do estilo da google, aspas simples, ponto e vírgula, etc
        'standard',
        'plugin:@typescript-eslint/recommended',
        // Padrão do prettier, sendo usado como um plugin do eslint, facilitando a integração
        'plugin:prettier/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
      rules: {
        'react/self-closing-comp': 'error',
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
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'jsx-a11y/alt-text': [
          'warn',
          {
            elements: ['img'],
            img: ['Image'],
          },
        ],
        'jsx-a11y/aria-props': 'warn',
        'jsx-a11y/aria-proptypes': 'warn',
        'jsx-a11y/aria-unsupported-elements': 'warn',
        'jsx-a11y/role-has-required-aria-props': 'warn',
        'jsx-a11y/role-supports-aria-props': 'warn',
        'react/no-unknown-property': 'error',
      },
      settings: {
        react: {
          version: 'detect',
        },
        'import/parsers': {
          [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
        },
      },
      ignorePatterns: ['node_modules'],
    }
    ```
  - [ ] Toda vez que mudar algo no projeto e não sentir uma reação do eslint, basta dar um CTRL + SHIFT + P> digitar reload window e clicar em Developer: Reload Window
  - [ ] Caso o lint não esteja apontando erros rode o comando: para ver se tem algum erro no código
    ```
    npm run lint
    ```
  - [ ] No package.json tire o *"type"="module"*, ele acaba esculhambando com tudo, descobri isso usando o 
    ```
    npm run lint
    ```
  - [ ] Para mais duvidas so seguir o video que está no inicio do repositório


   ## Links
   
  <p>
  <a href="https://vitejs.dev/guide/" target="_blank">
    <img height="25" src="https://img.shields.io/badge/Vite-lib?style=flat&color=blue">
  </a>
    
  <a href="https://tailwindcss.com/docs/installation/using-postcss" target="_blank">
    <img height="25" src="https://img.shields.io/badge/TailwindCss-lib?style=flat&color=blue">
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
 
  <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" target="_blank">
    <img height="25" src="https://img.shields.io/badge/extensão do tailwindcss intelliSense no vscode-extension?style=flat&color=blue">
  </a>
 
  <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank">
    <img height="25" src="https://img.shields.io/badge/extensão do Eslint no vscode-extension?style=flat&color=blue">
  </a>
    
  <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank">
    <img height="25" src="https://img.shields.io/badge/extensão do Prettier-Extension?style=flat&color=blue">
  </a>
    
  <a href="https://tailwindcss.com/blog/automatic-class-sorting-with-prettier" target="_blank">
    <img height="25" src="https://img.shields.io/badge/Prettier + Prettier plugin tailwindcss-lib?style=flat&color=blue">
  </a>
  </p>





