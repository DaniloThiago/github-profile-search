# Aplicação de Busca de Perfis do GitHub - Documentação (Estudo)
Esta é uma aplicação de busca de perfis de usuários do GitHub desenvolvida utilizando o framework Angular, com duas rotas principais: "home" e "perfil". A aplicação é responsiva e foi testada em três resoluções diferentes: Notebook/Desktop (resoluções maiores que 1300px de largura), tablet iPad e celular iPhone 5, utilizando o Chrome Dev Tools para simulação desses dispositivos.

## Pré-requisitos
Antes de instalar e executar a aplicação, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

* Node.js (versão 14.17.0 ou superior)
* npm (gerenciador de pacotes do Node.js)

## Instalação
Siga os passos abaixo para instalar a aplicação em sua máquina:

1. Clone o repositório do projeto do GitHub: **`git clone <URL_DO_REPOSITORIO>`**
2. Navegue até o diretório do projeto: **`cd github-profile-search`**
3. Instale as dependências do projeto utilizando o npm: **`npm install`**

##Executando o Ambiente de Desenvolvimento
Após a instalação, você pode executar a aplicação em ambiente de desenvolvimento utilizando o comando abaixo:

```sh
ng serve
```
Isso irá iniciar o servidor de desenvolvimento do Angular e a aplicação estará disponível em `http://localhost:4200/` no seu navegador.

##Executando a Build de Produção
Para executar a build de produção da aplicação, utilize o seguinte comando:
```sh
ng build --prod
```
Isso irá criar uma pasta `dist` na raiz do projeto, contendo os arquivos estáticos da aplicação prontos para serem implantados em um servidor de produção.

## Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

```bash
github--profile-search/
  |- src/
     |- app/
        |- components/
           |- home/              # Componentes relacionados à página de busca (home)
           |- perfil/            # Componentes relacionados à página de perfil
        |- services/
           |- github.service.ts  # Serviço para busca de perfis de usuários
     |- assets/
        |- css/
           |- styles.css         # Estilos globais da aplicação
  |- ...
```

## Libs e Frameworks Utilizados
Nesta aplicação, utilizei o seguinte:
* Angular: um framework de desenvolvimento de aplicativos web desenvolvido pelo Google.
* RxJS: uma biblioteca de programação reativa para manipulação assíncrona de dados.
* Font Awesome: uma biblioteca de ícones vetoriais populares.
* GitHub API: uma API de serviço web fornecida pelo GitHub para interagir com repositórios e dados de usuários no GitHub.

Espero que esta informação seja útil! Se você tiver mais alguma dúvida, estou à disposição para ajudar.
