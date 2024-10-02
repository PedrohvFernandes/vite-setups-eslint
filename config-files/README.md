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
