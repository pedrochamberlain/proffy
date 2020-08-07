# Instalação

## Node e NPM (Contextualização)

O primeiro passo para podermos utilizar a Omnistack (Node.js, ReactJS e React Native) é instalar o Node.js, que vem acompanhado do NPM. Para visualizar o site do Node.js e suas versões [clique aqui](https://nodejs.org/en/).

Como você já deve ter visto, na página principal do Node são apresentadas duas versões: **LTS** e **Current**. A primeira se refere à versão do Node que possui **Long Term Support (LTS)**, são as mais confiáveis e é a que recomendamos utilizar na NLW. Já a segunda se refere à versão do Node mais atual e experimental, o que não é recomendada para desenvolvimento ainda.

Escolhida a versão LTS do Node, precisamos decidir o método de instalação. É importante ressaltar que apesar de na tela inicial do Node.js eles recomendarem a forma de instalação direta (famosa janela que só clicamos no **Next**), iremos utilizar nesse guia os gerenciadores de pacote (exceto Linux). 

Não só pelo fato de facilitar possíveis desinstalações e atualizações do Node, mas também por serem muito úteis para trabalhar com diversos outros pacotes.

Pronto dev, agora que já sabemos que iremos instalar a versão LTS do Node.js utilizando um gerenciador de pacote, bora para o passo-a-passo de cada sistema operacional.

## Linux (Ubuntu/Debian)

Para o Linux iremos utilizar o **[NodeSource](https://github.com/nodesource/distributions/blob/master/README.md)**, basta seguir esses passos:

- Verifique se você possui o **[curl](https://curl.haxx.se/)** instalado rodando no terminal o comando:

```bash
curl --version
```

Caso ele retorne a versão, pode pular para o próximo passo. Caso não, basta rodar o comando:

```bash
sudo apt install curl
```

- Com o **curl** instalado, execute o comando de instalação da versão LTS mais recente disponível:
    - Ubuntu

    ```bash
    curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

    - Debian (como root)

    ```json
    curl -sL https://deb.nodesource.com/setup_lts.x | bash -
    apt-get install -y nodejs
    ```

    Feche o terminal e abra novamente para as alterações fazerem efeito.

- Por fim, execute os seguintes comandos no terminal:

```bash
node -v
npm -v
```

Caso retorne as versões do Node e npm, sua instalação foi um sucesso.

## macOS

Para o macOS iremos utilizar o gerenciador de pacotes [**Homebrew**](https://brew.sh/index_pt-br), que é instalado usando Ruby, que já vem instalado por padrão, execute o seguinte comando no terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Para verificar se ele foi instalado com sucesso execute:

```bash
brew --version
```

Com o **Homebrew** instalado, basta executar o comando para instalar a versão 12 (LTS) mais recente:

```bash
brew install node@12
```

Como instalamos uma versão do Node diferente da default do Homebrew (o padrão é a current, nesse caso v14), é preciso adicionar manualmente o `path` do Node na nossa variável ambiente. Adicione a seguinte linha ao final do arquivo `~/.bashrc` (ou do arquivo `~/.zshrc` caso você utilize o shell ZSH):

```bash
export PATH="/usr/local/opt/node@12/bin:$PATH"
```

Por fim, reinicie o terminal e execute os seguintes comandos:

```bash
node -v
npm -v
```

Caso retorne as versões do Node e npm, sua instalação foi um sucesso.

## Windows

Para o Windows utilizaremos o gerenciador de pacotes **[Chocolatey](https://chocolatey.org/)**, porém antes dos passos de instalação vamos falar brevemente sobre qual shell você deve usar.

- **CMD**: também conhecido como **Command Prompt**, ele é um dos shells mais antigos da atualidade (foi construído para ser compatível com o **MS-DOS**) e, apesar da sua fama, hoje em dia tem sido cada vez menos utilizado.
- **Powershell**: novo shell apresentado pela Microsoft por volta de 2005, ele apresenta diversas melhorias em relação ao **CMD**, tornando-o popular atualmente e consequemente a nossa escolha para a NLW#02.

Escolhido o shell, vamos começar a instalação:

- Busque no campo de busca do Windows por **Windows Powershell**, clique com o botão direito em cima do programa e escolha a opção **Executar como administrador**.
- O Powershell trabalha com um esquema de autorizações (conhecido como `Execution Policy`) para execução de scripts e, por isso, precisamos verificar se o presente no sistema está compatível com o que o Chocolatey precisa. Execute o seguinte comando:

```bash
Get-ExecutionPolicy
```

Caso ele retorne `Restricted`, execute o comando:

```bash
Set-ExecutionPolicy RemoteSigned
```

E escolha a opção `[A] Sim para Todos`

Caso o comando acima apresente erro, tente usar:

`Set-ExecutionPolicy Bypass -Scope Process`

Verifique se alteração de permissão ocorreu com sucesso executando novamente o comando:

```bash
Get-ExecutionPolicy
```

Alterada a permissão, basta instalar o **Chocolatey** com o comando:

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

Caso o comando acima apresente um erro, verifique se a sua máquina atende às requisições mínimas

`Windows 7+ / Windows Server 2003+
PowerShell v3+
.NET Framework 4.5+`

Caso o erro apresentado seja `Exceção ao definir "SecurityProtocol": "Não é possível converter o valor "3312"`, siga **[esse guia](https://chocolatey.org/blog/remove-support-for-old-tls-versions)**

- Após o fim da instalação, feche e abra o powershell como administrador novamente e execute:

```bash
choco -v
```

Caso ele retorne a versão do **Chocolatey**, a instalação foi um sucesso. Para finalizar, basta instalar a versão LTS mais recente do Node com o seguinte comando:

```bash
cinst nodejs-lts
```

E escolha a opção `[A]ll - yes to all`

Após o fim da instalação, feche e abra o powershell como administrador novamente e execute:

```bash
node -v
npm -v
```

Caso retorne as versões do Node e npm, sua instalação foi um sucesso.

# Yarn 1

## Linux (Ubuntu/Debian)

Para instalar o Yarn 1 no Linux vamos começar configurando o repositório do **Yarn** executando:

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

Instale utilizando o seguinte comando:

```bash
 sudo apt update && sudo apt install --no-install-recommends yarn
```

Adicione ao arquivo `~/.bashrc` (ou `~/.zshrc` caso você utilize o shell Zsh) a seguinte linha: 

```bash
export PATH="$PATH:`yarn global bin`"
```

Feche e abra o terminal novamente, em seguida rode o comando:

```bash
 yarn --version
```

Caso retorne a versão do Yarn (acima de 1.0, abaixo de 2.0), a instalação ocorreu com sucesso.

## macOS

Para instalar o Yarn 1 no macOS siga os seguintes passos, execute o comando:

```bash
 brew install yarn
```

Adicione ao arquivo `~/.bashrc` (ou `~/.zshrc` caso você utilize o shell Zsh) a seguinte linha: 

```bash
export PATH="$PATH:`yarn global bin`"
```

Feche e abre o terminal novamente. Em seguida, rode o comando:

```bash
 yarn --version
```

Caso retorne a versão do Yarn (acima de 1.0, abaixo de 2.0), a instalação ocorreu com sucesso.

## Windows

Para instalar o Yarn 1 no Windows siga os seguintes passos, execute o comando no Powershell (como admin):

```bash
 cinst yarn
```

E escolha a opção `[A]ll - yes to all`. 

Feche e abra o terminal novamente, em seguida rode o comando:

```bash
 yarn --version
```

Caso retorne a versão do Yarn (acima de 1.0, abaixo de 2.0), a instalação ocorreu com sucesso.

# Expo

Para instalar o Expo é bem simples e o passo é o mesmo nos 3 sistemas operacionais. 

- Com o Node e Yarn instalados, abra o terminal (no Windows, sem ser como admin) e execute:

```bash
yarn global add expo-cli
```

Caso você prefira utilizar o npm, basta executar:

`npm install expo-cli --global`

- Para verificar se a instalação ocorreu com sucesso, execute:

```bash
expo --version
```

Caso o comando resulte no erro `expo : O arquivo C:\Users\xxxx\AppData\Roaming\npm\expo.ps1 não pode ser carregado`, verifique se o **ExecutionPolicy** está configurado como `RemoteSigned`.

Se retornar a versão da cli do Expo, a instalação ocorreu com sucesso.

Caso a instalação da expo-cli como global no Yarn apareça que ocorreu com sucesso mas ao tentar utilizar o expo diz que o comando não existe, verifique no Linux e no macOS se você adicionou a linha `export PATH="$PATH:`yarn global bin`"` ao arquivo de configuração do seu terminal.

# Visual Studio Code

Para instalar o editor de texto Visual Studio Code em qualquer um dos 3 sistemas operacionais, basta [acessar o site](https://code.visualstudio.com/), baixar e rodar o executável.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9dddb31-2111-4767-9e21-2c3f5f5fc85a/vscode.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9dddb31-2111-4767-9e21-2c3f5f5fc85a/vscode.gif)

Com a instalação finalizada, abra o programa. Você deve se deparar com uma interface parecida com essa:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bf9ea041-d406-47c3-848e-18c53e9605e7/1-welcome.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bf9ea041-d406-47c3-848e-18c53e9605e7/1-welcome.png)

Feche a página **Welcome**. Para deixar a sua experiência ainda melhor, vamos passar para vocês algumas extensões e configurações especialmente escolhidas por ninguém menos que o  Diego. Vamos lá

## Extensões

Extensões são formas de adicionar ainda mais funcionalidades ao seu Visual Studio Code.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b296ac36-a8dd-4117-a1e0-b7999e1990ea/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b296ac36-a8dd-4117-a1e0-b7999e1990ea/Untitled.png)

Vamos citar 2 aqui para vocês:

### Omni

Nada melhor do que começar pelo tema do editor. Nós desenvolvedores trabalhamos diariamente, horas e horas, com o editor de código. Por isso, é muito importante escolher uma aparência para o Visual Studio Code que não canse demais os olhos e ao mesmo tempo realce bem o texto. É por isso que a Rocketseat decidiu criar (baseado no nosso querido Dracula) o seu próprio tema: Omni

**Como instalar? ⬇️**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76bd3f8f-1b2c-4ec4-bd6d-b92270cabd24/omni.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76bd3f8f-1b2c-4ec4-bd6d-b92270cabd24/omni.gif)

### Material Icon Theme

O **Material Icon Theme** é uma extensão que permite a customização dos ícones das pastas por extensões de arquivos, por exemplo, com ele conseguimos customizar um ícone para arquivos **typescript**, outro para **javascript,** outro para **hml** e assim por diante. 

**Como instalar? ⬇️**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f235cd7c-7840-4e60-8d4e-81643dfe0895/materialicone.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f235cd7c-7840-4e60-8d4e-81643dfe0895/materialicone.gif)

## Configurações

Para finalizar, vamos adicionar algumas configurações no Visual Studio Code especialmente escolhidas pelo Diego. Para isso, basta pressionar `Ctrl + Shift + P` e escolher a opção `Open Settings (JSON)`. Na janela que foi aberta, adicione as configurações abaixo:

É preciso tomar alguns cuidados ao realizar essas alterações. Verifique se a configuração adicionada já não existe no arquivo. Se sim, apenas atualize o valor. 

Verifique também se a todas as linhas de configuração **exceto a última** terminam com vírgula, para não gerar erro. 

Por fim, caso queira substituir completamente a sua configuração pela abaixo, envolva com chaves `{}` todo o código disponibilizado.

```json
  "workbench.iconTheme": "material-icon-theme",
  "workbench.startupEditor": "newUntitledFile",

  "explorer.compactFolders": false,
  "editor.renderLineHighlight": "gutter",
  "workbench.editor.labelFormat": "short",
  "extensions.ignoreRecommendations": true,

  "javascript.updateImportsOnFileMove.enabled": "never",
  "typescript.updateImportsOnFileMove.enabled": "never",

  "breadcrumbs.enabled": true,
  "editor.parameterHints.enabled": false,
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": false,
  
  "emmet.syntaxProfiles": { "javascript": "jsx" },
  "emmet.includeLanguages": { "javascript": "javascriptreact" },

  "javascript.suggest.autoImports": true,
  "typescript.suggest.autoImports": true,

  "workbench.colorTheme": "Omni"
```

#Nessa seção iremos ensinar a atualizar utilizando os mesmos métodos vistos na seção **Instalação**.

## Node e npm

Se você já possui Node na versão 12, não é preciso instalar nem atualizar

### Linux (Ubuntu)

Para atualizar o seu Node e npm utilizando o **NodeSource**, siga os passos:

- Existem dois casos que você pode se deparar:
    - **Caso 1**: você já tem o Node 12 (LTS mais recente), mas desatualizado.

    Basta atualizar utilizando os clássicos comandos:

    ```json
    sudo apt-get update && sudo apt-get upgrade
    ```

    - Em seguida, rode os comandos:

    ```bash
    node -v
    npm -v
    ```

    Caso estejam nas versões 12.18.3 e 6.14.6, respectivamente, a atualização ocorreu com sucesso.

    ---

    - Caso 2: você tem um Node em outra versão que não seja a LTS mais recente (12).

    Primeiramente é preciso desinstalar o Node:

    ```json
    sudo apt-get remove nodejs
    ```

    Em seguida, é preciso remover o Node do pacote de dependências. Aperte a tecla `Windows` e busque pela opção **Software & Updates**. Clique na aba **Other Software** e procure na lista pelas dependências do Node referente a versão que você quer remover. Abaixo segue um exemplo de como apareceria no caso da versão 10 do Node:

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e13c6d4-0d5d-4368-9e82-94525e28c0ba/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e13c6d4-0d5d-4368-9e82-94525e28c0ba/Untitled.png)

    Selecione ambas e clique no botão **Remove**. Feche a janela e aceita a opção de atualizar as informações clicando no botão **Reload**.

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1488384c-637f-48ca-bfa8-df5976814b82/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1488384c-637f-48ca-bfa8-df5976814b82/Untitled.png)

    Após remover ambas as dependências, abra o terminal e execute os comandos:

    ```bash
    curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

    Por fim, rode os comandos:

    ```bash
    node -v
    npm -v
    ```

    Caso estejam nas versões 12.18.3 e 6.14.6, respectivamente, a atualização ocorreu com sucesso.

### macOS

Para atualizar o seu Node e npm utilizando o **Homebrew**, siga os passos:

- Remova o Node da sua máquina:

```bash
brew uninstall node
```

- Atualize o brew e instale a versão LTS mais recente (12)

```bash
brew update
brew install node@12
```

- Como instalamos uma versão do Node diferente da default do Homebrew (o padrão é a current, nesse caso v14), é preciso adicionar manualmente o `path` do Node na nossa variável ambiente. Adicione a seguinte linha ao final do arquivo `~/.bashrc` (ou do arquivo `~/.zshrc` caso você utilize o shell ZSH):

```bash
export PATH="/usr/local/opt/node@12/bin:$PATH"
```

- Reinicie o terminal e rode os comandos:

```bash
node -v
npm -v
```

Caso estejam nas versões 12.18.3 e 6.14.6, respectivamente, a atualização ocorreu com sucesso.

### Windows

Para atualizar o seu Node e npm utilizando o **Chocolatey**, siga os passos:

- Execute o seguinte comando:

```bash
choco upgrade nodejs-lts
```

- Em seguida, rode os comandos:

```bash
node -v
npm -v
```

Caso estejam nas versões 12.18.3 e 6.14.6, respectivamente, a atualização ocorreu com sucesso.

## Yarn 1

Se você já possui Yarn na versão 1.22, não é preciso instalar nem atualizar

### Linux (Ubuntu/Debian)

Para atualizar o seu Yarn 1 utilizando o , siga os passos:

- Execute os seguintes comandos:

```bash
sudo apt-get update
sudo apt-get --only-upgrade install yarn
```

- Em seguida, rode o comando:

```bash
yarn --version
```

Caso esteja na versão 1.22.4, a atualização ocorreu com sucesso.

### macOS

Para atualizar o seu Yarn 1 utilizando o **Homebrew**, siga os passos:

- Execute o seguinte comando:

```bash
brew upgrade yarn
```

- Em seguida, rode o comando:

```bash
yarn --version
```

Caso esteja na versão 1.22.4, a atualização ocorreu com sucesso.

### Windows

Para atualizar o seu Yarn 1 utilizando o **Chocolatey**, siga os passos:

- Execute o seguinte comando:

```bash
choco upgrade yarn
```

- Em seguida, rode o comando:

```bash
yarn --version
```

Caso esteja na versão 1.22.4, a atualização ocorreu com sucesso.
