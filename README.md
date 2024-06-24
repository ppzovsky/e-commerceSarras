## Gerenciador de Produtos Ecommerce (React Native + Expo)

Este projeto em React Native, construído com o Expo, oferece um sistema completo para gerenciar produtos em um ambiente de ecommerce. A aplicação utiliza o Mockapi como um banco de dados simulado, permitindo o desenvolvimento e teste das funcionalidades sem a necessidade de um backend real.

### Funcionalidades Principais

* **Listagem de Produtos:** Visualize todos os produtos cadastrados, com informações detalhadas como nome, descrição, preço e imagem.
* **Criação de Produtos:** Adicione novos produtos ao catálogo, preenchendo os campos necessários e enviando imagens.
* **Edição de Produtos:** Modifique as informações de produtos existentes, incluindo nome, descrição, preço e imagem.
* **Exclusão de Produtos:** Remova produtos do catálogo de forma permanente.
* **Pesquisa de Produtos:** Encontre produtos específicos através de um campo de busca, filtrando por nome ou descrição.

### Tecnologias Utilizadas

* **React Native:** Framework para desenvolvimento de aplicativos mobile multiplataforma (iOS e Android).
* **Expo:** Ferramenta que facilita a criação, desenvolvimento e deploy de aplicativos React Native.
* **Mockapi:** Simulador de API REST que permite criar endpoints e dados fictícios para testes.
* **React Navigation:** Biblioteca para navegação entre telas do aplicativo.
* **Axios:** Cliente HTTP para realizar requisições à API Mockapi.

### Pré-requisitos

* Node.js e npm (ou yarn) instalados na sua máquina.
* Expo CLI instalado globalmente: `npm install expo-cli --global`
* Um dispositivo físico (iOS ou Android) ou emulador para executar o aplicativo.

### Instalação e Execução

1. Clone o repositório: `git clone https://seu-repositorio.git`
2. Navegue até o diretório do projeto: `cd seu-repositorio`
3. Instale as dependências: `npm install` ou `yarn install`
4. Inicie o aplicativo: `npx expo start`
5. Utilize o Expo Go app no seu dispositivo ou emulador para escanear o QR code e abrir o aplicativo.

### Estrutura do Projeto

```
seu-repositorio/
├── App.js              # Componente principal do aplicativo
├── app.json            # Arquivo de configuração do Expo
├── assets/             # Imagens e outros recursos
├── components/         # Componentes reutilizáveis (ex: ProductCard, ProductForm)
├── routes/         # Configuração da navegação
├── screens/            # Telas do aplicativo (ex: ProductListScreen, ProductDetailsScreen)
├── services/           # Funções para interação com a API Mockapi
└── package.json        # Arquivo de dependências do projeto
```

### Considerações Finais

Este projeto serve como base para o desenvolvimento de um gerenciador de produtos completo em um ecommerce. A utilização do Mockapi simplifica o processo inicial, mas em um ambiente de produção, você precisará substituí-lo por um backend real com um banco de dados persistente.

Sinta-se à vontade para personalizar e expandir este projeto de acordo com as necessidades do seu ecommerce.
