## Onde colocar esses arquivos:
- Na raiz do projeto

- Forma antiga V4 [Migrate from v4](https://typicode.github.io/husky/migrate-from-v4.html)
  - ```npm i lint-staged husky -D```: Impede que façamos commits defeituosos em relação codigo

  - o arquivo junto com a *lib lint-staged .lintstagedrc.json* ela pega todos os arquivos que esteja prontos para entrar no proximo commit, ou seja, arquivos modificados, em cima desses arquivos queremos aplicar alguns scripts antes de fazer o commit, ex: eslint, prettier, testes, etc...
    ``` bash
    {
      "\*.{js,jsx,ts,tsx}": [
        "eslint --fix",
        "prettier --write",
        "git add"
      ]
    }
    ```
    ```bash
    {
        "*/**/*.{ts,tsx}": [
            "eslint --fix",
            "eslint"
        ]
    }
    ```
    ```bash
    {
        "*/**/*.{ts,tsx}": [
            "npm run lint:fixmysrc" // Caso tenha alguma comando dentro do package.json de eslint pode usar ele também
        ]
    }
    ```
  - Basicamente o eslint tenta corrigir os arquivos antes de enviar .huskyrc.json
    ```bash
    {
      "hooks": {
        "pre-commit": "lint-staged"
      }
    }
    ```
  - E agora vem o husky, precisamos colocar isso junto com o husky

  - Nele vamos definir hooks para o git, como o pre-commit, basicamente passamos um script para rodar no pre-commit, o lint-staged, toda vez que formos fazer um commit, o husky dispara esse pre-commit, antes do pre-commit rodar, ele executa o comando lint-staged, que nada mais é que o arquivo .lintstagedrc.json

- Nova forma V9 do Husky[Introduction](https://typicode.github.io/husky/) e [Migrate from v4](https://typicode.github.io/husky/migrate-from-v4.html)
    ```bash
      #Instala
      npm i husky -D

      #Init
      npx husky init

      #Script criado no package.json:
      {
        "scripts": {
          "prepare": "husky"
          },
      }
          
      #Apos isso, ele cria uma pasta .husky e cria um script de setup(Prepare), basta você dar uma vez esse comando. Lembrando que o .git tem que estar na raiz do projeto, se não tiver ele não vai funcionar.
      npm run prepare

      #Apos dar esse comendo, ele cria um monte de arquivo na pasta, mas o mais importe o que esta na raiz dela, o .husky/pre-commit, que é o script que ele vai rodar antes de fazer o commit: Agora é so colocar o que ele deve executar antes de fazer o commit, no caso o lint-staged ou um comando direto do package.json, ex: npm lint. Pode colocar o prefixo run antes ou nem coloque:
      
      #Ex: nesse caso ele rodaria os testes antes de enviar
      npm test

      #Ex: nesse caso ele rodaria o lint-staged antes de enviar. Nesse caso você cria um arquivo .lintstagedrc.json na raiz do projeto, e coloca os comandos. Se não você coloca diretamente no package.json
      npx lint-staged

      # No package.json:
      "lint-staged": {
        "*/**/*.{ts,tsx}": [
            "eslint --fix",
            "eslint"
        ]
      }

      # No arquivo separado .lintstagedrc.json:
      {
        "*/**/*.{ts,tsx}": [
            "eslint --fix",
            "eslint"
        ]
      }

      # Caso você queira pode colocar o comando direto no pre-commit  do husky:
      npm run lint ou npm lint
      npm run lint:fix ou npm lint:fix
      npm run test ou npm test
  ```
  - Tenha em mente que a pasta *.git* esteja a onde você quer usar o husky, pois ele cria uma pasta .git/hooks, que é onde ele vai colocar os hooks, se não tiver a pasta .git, ele não vai funcionar. Por exemplo se no repositório você criou umas subs pastas para fazer front e a api, dentro do front e api não vai possui a pasta .git, porque o .git fica na raiz de tudo, ou seja, na pasta do projeto do repositório, antes de entrar nas subs pastas que você criou. Para ver ela basta abrir o projeto no windows explorer e habilitar a opção de mostrar pastas ocultas. Se não tiver ele vai dar esse erro quando tentar dar um npm run prepare:
    ```bash
    npm run prepare           

    > reactjs-hooks-tdd-clean-architecture-solid-patterns2@0.0.0 prepare
    > husky

    .git can't be found
    ```
  - Links de ajuda para instalar o Husky(Algumas coisas estão desatualizadas, mas ajudaram a tomar um norte):
   - [Husky e lint-staged para pré-commit em React](https://dev.to/griseduardo/husky-e-lint-staged-para-pre-commit-em-react-2l26)
   - [Lint-staged + Husky](https://valchan.com.br/lint-staged-husky/)
   - [Setting up a ESLint, Prettier, Husky and lint-staged Integration with TypeScript in Next.js 13 | 14](https://medium.com/yavar/setting-up-a-eslint-prettier-husky-and-lint-staged-integration-with-typescript-in-next-js-13-14-68044dfae920)
   - [O que mudou no script](https://github.com/typicode/husky/releases/tag/v9.0.1)
  
  - Por fim o Husky agora funciona no projeto, mas o eslint que o professor configurou esta todo desatualizando:
    ```bash
        module.exports = {
        root: true,
        env: { browser: true, es2020: true },
        // Extends: Realiza o extend da biblioteca ESLint, que implanta a análise do style guidesJS Standard Style, definido a estrutura que deve ser utilizada como default;
        extends: [
          // Inseridos por mim
          // Estende o style guide do eslint com as regras do standard
          'standard-with-typescript',

          // Ja veio com vite
          'eslint:recommended',
          // O plugin: --> Nada mais é que a lib @typescript-eslint/eslint-plugin
          'plugin:@typescript-eslint/recommended',
          'plugin:react-hooks/recommended',
        ],
        ignorePatterns: ['dist', '.eslintrc.cjs', '*.config.*'],

        // Inserido por mim
        parserOptions: {
          // Define o parser que será utilizado para analisar o código
          parser: '@typescript-eslint/parser',
          // Define o arquivo de configuração do typescript para ser usado pelo ESLint
          project: `${__dirname}/tsconfig.json`
        },

        // Do vite
        // parser: '@typescript-eslint/parser',

        plugins: ['react-refresh'],
        rules: {
          'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
          ],
          
          // Inserido por mim
          // desabilita a config do eslint onde ele dita que so pode usar ou interface ou type
          "@typescript-eslint/consistent-type-definitions": "off",
          // ele não deixa fazer comparação que não seja booleana
          "@typescript-eslint/strict-boolean-expressions": "off",
          // error Definition for rule '@typescript-eslint/camelcase' was not found @typescript-eslint/camelcase
          "@typescript-eslint/camelcase": "off",
        },
      }
    ```
- Vou usar um pacote meu para configurar o eslint: ```npm i @pedrohvfernandes/eslint-config``` e dar uninstall:
  ```bash
    npm uninstall eslint-config-standard-with-typescript eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh eslint-plugin-standard @typescript-eslint/eslint-plugin @typescript-eslint/parser
  ```
- Por fim pro arquivo do eslint eu mudou o tipo do arquivo dele para .json e estendo minha config do React

- Ex de comando a mais no pre-commit: meu *.lintstagedrc.json* eu coloquei o comando do jest(Você pode colocar diversos comandos) para rodar os testes antes de fazer o commit de arquivos alterados(Somente deles):
  ```bash
    {
      "*/**/*.{ts,tsx}": [
          "eslint src/**/*.{ts,tsx} --fix",
          "npm run test:staged"
      ]
    }
  ```
- Na pasta *.husky* colocamos o arquivo de hook de pre push que roda o script(Pode ser outro comando ou outros mais) ```npm run test:ci``` antes de fazer o push para o github, que vai gerar a cobertura de testes. Apos colocar isso, não sera possível enviar o push via github desktop, ele da erro de WSL
  ```bash
    <3>WSL (30) ERROR: CreateProcessParseCommon:708: Failed to translate C:\Users\Pedro\OneDrive\Documentos\GitHub\tdd-clean-architecture-solid
    <3>WSL (30) ERROR: CreateProcessParseCommon:754: getpwuid(0) failed 2
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Users\Pedro\AppData\Local\GitHubDesktop\app-3.3.12\resources\app\git\mingw64\libexec\git-core
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Users\Pedro\AppData\Local\GitHubDesktop\app-3.3.12\resources\app\git\mingw64\bin
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Users\Pedro\AppData\Local\GitHubDesktop\app-3.3.12\resources\app\git\usr\bin
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Users\Pedro\bin
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Users\Pedro\AppData\Local\GitHubDesktop\app-3.3.12\resources\app\git\mingw64\bin
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Users\Pedro\AppData\Local\GitHubDesktop\app-3.3.12\resources\app\git\mingw64\usr\bin
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Python312\Scripts
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Python312
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\WINDOWS\system32
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\WINDOWS
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\WINDOWS\System32\Wbem
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\WINDOWS\System32\WindowsPowerShell\v1.0
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\WINDOWS\System32\OpenSSH
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Program Files\NVIDIA Corporation\NVIDIA NvDLISR
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\ProgramData\chocolatey\bin
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Users\Pedro\AppData\Roaming\nvm
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Program Files\nodejs
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Program Files\nodejs
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Program Files\Docker\Docker\resources\bin
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Program Files\Git\cmd
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Program Files\Cloudflare\Cloudflare WARP
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Users\Pedro\.console-ninja\.bin
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Users\Pedro\AppData\Local\Microsoft\WindowsApps
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Users\Pedro\AppData\Local\Programs\Microsoft VS Code\bin
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Users\Pedro\AppData\Local\GitHubDesktop\bin
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Users\Pedro\AppData\Roaming\nvm
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Program Files\nodejs
    <3>WSL (30) ERROR: UtilTranslatePathList:2866: Failed to translate C:\Users\Pedro\AppData\Roaming\npm
    <3>WSL (30) ERROR: CreateProcessEntryCommon:331: getpwuid(0) failed 2
    <3>WSL (30) ERROR: CreateProcessEntryCommon:502: execvpe /bin/bash failed 2
    <3>WSL (30) ERROR: CreateProcessEntryCommon:505: Create process not expected to return
    husky - pre-push script failed (code 1)
    error: failed to push some refs to 'https://github.com/PedrohvFernandes/tdd-clean-architecture-solid.git'
  ```
- O Husky depois da v5 gera conflitos com o pacote git-commit-msg-linter, para resolver basta criar um arquivo dentro do husky *commit-msg* e colocar o seguinte comando:
  ```bash
    .git/hooks/commit-msg \$1
  ```
Mais detalhes em: [The package is not working with husky v5](https://github.com/legend80s/git-commit-msg-linter/issues/7)
