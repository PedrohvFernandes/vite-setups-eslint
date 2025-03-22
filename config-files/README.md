# Sobre alguns arquivos

### Biome.json para aplicações Node.js e React

  Biome é uma alternativa do Eslint, para fazer ele funcionar siga os passos abaixo:

  1. Instale o Biome no seu projeto:
  ```bash
    npm i -D @biomejs/biome
  ```
  2. Crie um arquivo `biome.json` na raiz do seu projeto e adicione o seguinte conteúdo:
  ```json
   "O que esta no arquivo `biome.json` deste repositório. Copie ele todo e cole no seu arquivo biome.json que você criou no seu projeto."
  ```

  3. Após criar o arquivo de configuração dele, de o seguinte comando no seu teclado:
  ```bash
    ctrl+shift+p
  ```
  Depois busque por: `Preferences: Abrir Configurações do Workspace(Json)` e clique nele. Ao fazer isso ira abrir uma pasta chamada `.vscode` e dentro dela um arquivo chamado `settings.json`, cole o seguinte conteúdo:
  ```json
  {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "biomejs.biome"
  }
  ```
  Esse conteudo irá colocar essas configs para esse projeto em especifico que você esta trabalhando.

  4. Agora instale a extensão do Biome no seu vscode: [Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)

  5. Reset o seu vscode e pronto, o Biome já esta configurado no seu projeto.

  6. Quando for usar o Biome para o React, lembre de colocar isso: Para front-end react, por conta do main.tsx por conta que estamos usando o noNonNullAssertion(!) que é a forma que ditamos para o ts informando que o root nunca vai ser nulo
      ```JSON
      "style": {
        "noNonNullAssertion": "off"
        }
      ```

### Eslint

  1. Para o eslint funcionar, além de instalar ele com npm o eslint(atualmente gosto de usar a versão 8 ou 8.56.0 que não da problema), instalar com npm o [meu pacote](https://www.npmjs.com/package/@pedrohvfernandes/eslint-config) ja com as configs no eslint ou o da [Rocketseat](https://github.com/Rocketseat/eslint-config-rocketseat/tree/main), ter o arquivo .eslintrc.json e a extensão no vscode Nome: ESLint. Descrição: Integrates ESLint JavaScript into VS Code.

  2. Precisamos configurar a pasta .vscode(dentro dela o settings.json, config do vscode que a gente deixa para esse projeto) na raiz do projeto, ou seja, se você tiver uma pasta para o back, outra para o front, você precisa deixar essa pasta .vscode na raiz do projeto/repositorio. Mas o arquivo eslint dentro de cada pasta especifica, como por exemplo, a pasta back tera um arquivo .eslintrc.json e a pasta front tera outro arquivo .eslintrc.json.

  3. Para funcionar a gente abre a configuração do vscode e marca a opção `Editor: Format On Save`. Porque ao dar ctrl+s ou command+s(mac) ele ja formata o código, sem precisar ficar rodando o script de formatação(ex: npm run lint), que vai formatar o código usando o --fix.
  
  4. Você pode usar ela com o husky + lint-staged, para que ao dar um commit ele rode o eslint e o prettier para formatar o código, para isso você precisa instalar o husky e o lint-staged. Ex de arquivo de configuração do lint-staged(lintstagedrc.json):
  ```json
  "lint-staged": {
    "*/**/*.{js,jsx,ts,tsx}": [
      "npm run lint:fix",
    ]
  }
  ```
  O arquivo de config do husky, ta na pasta husky. Como exemplo tenho alguns projetos meus que usam o husky + lint-staged + eslint. Exemplos:
    1 - [vue-nestjs-mongodb-pratica](https://github.com/PedrohvFernandes/vue-nestjs-mongodb-pratica/tree/main)
    2 - [Micro-saas-todo-stripe](https://github.com/PedrohvFernandes/micro-saas-todo-stripe)
    3 - [tdd-clean-architecture-solid](https://github.com/PedrohvFernandes/tdd-clean-architecture-solid)
  
  A extensão do eslint no vscode ele so vai mostrar em tempo real os problemas na tela
  O comando do eslint sem o --fix ele mostra os problemas no terminal, com o --fix ele mostra e resolve
  Com o .vscode na raiz do projeto + o format on save marcada, ele ja formata o código ao salvar o arquivo
  Com husky + lint-staged, ele formata o código ao dar um commit.
  Cada projeto dentro do mesmo repositorio, pode ter um arquivo .eslintrc.json e .lintstagedrc.json diferente, por exemplo, o back pode ter um arquivo .eslintrc.json e o front outro arquivo .eslintrc.json...
