  - Caso o git que você instalou colocou o editor padrão vim ou VI e quer usar o vscode para mudar basta colocar isso em algum terminal(cmd, vscode...): ```git config --global core.editor code --wait```, com isso ele vai abrir o vscode para editar o commit.

  - ```git config --global --edit```: Basta inserir isso em algum terminal. Com isso, ele abre o arquivo de configuração do git *.gitconfig*, onde você pode adicionar alias para comandos do git. Lembrando que a flag ```--global``` é para alterar do usuário, tem somente do projeto ```--local``` e do sistema ```--system``` todos os projetos e usuários da maquina. Ex do *gitconfig em outras maquinas* e arquivo de exemplo do *.gitconfig* na pasta *note*.

  - O professor criou uma pasta ```git-alias``` somente para demonstrar os commits usando esses atalhos que ele mesmo criou dentro do arquivo *.gitconfig* que ele abriu com o comando ```git config --global --edit```.:

    > Alias(apelido): Atalhos do git
      
    ```bash
      [push]
      followTags = true
      [alias]
      c = !git add --all && git commit -m
      s = !git status -s
      l = !git log --pretty=format:'%C(blue)%h%C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'
      t = !sh -c 'git tag -a $1 -m $1' -
      amend = !git add --all && git commit --amend --no-edit
      count = !git shortlog -s --grep
    ```
