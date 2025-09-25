# Documentação do Projeto

## Descrição do Projeto

Este é um projeto de site de agendamento, desenvolvido com uma arquitetura moderna de front-end e back-end desacoplados. O front-end é uma aplicação de página única (SPA) construída com React, e o back-end é uma API RESTful desenvolvida com Node.js e Express.

## Tecnologias Utilizadas

### Front-end

- **React:** Biblioteca para construção de interfaces de usuário.
- **Vite:** Ferramenta de build e desenvolvimento rápido para projetos web modernos.
- **TypeScript:** Superset de JavaScript que adiciona tipagem estática.
- **Tailwind CSS:** Framework de CSS utilitário para estilização.
- **React Router:** Para gerenciamento de rotas na aplicação.
- **Lucide React:** Biblioteca de ícones.
- **Supabase Client:** Para integração com os serviços da Supabase.

### Back-end

- **Node.js:** Ambiente de execução para JavaScript no servidor.
- **Express:** Framework para construção de APIs RESTful.
- **TypeScript:** Para um desenvolvimento mais robusto e seguro no back-end.
- **ts-node-dev:** Para desenvolvimento com reinicialização automática do servidor.
- **Axios:** Cliente HTTP para fazer requisições.
- **CORS:** Para habilitar o Cross-Origin Resource Sharing.
- **Dotenv:** Para gerenciamento de variáveis de ambiente.

## Arquitetura

O projeto é dividido em duas partes principais:

- **`frontend` (diretório raiz):** Contém a aplicação React. A estrutura de pastas segue o padrão de projetos React, com os componentes em `src/components`, hooks em `src/hooks` e serviços em `src/services`. A estilização é feita com Tailwind CSS, e o roteamento é gerenciado pelo React Router.

- **`backend`:** Contém a API RESTful desenvolvida em Node.js com Express. A API é responsável por fornecer os dados para a aplicação front-end e se comunicar com outros serviços, como o da Supabase.

## Como Iniciar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   ```

2. **Instale as dependências do front-end:**
   ```bash
   cd <diretorio-do-projeto>
   npm install
   ```

3. **Instale as dependências do back-end:**
   ```bash
   cd backend
   npm install
   ```

### Execução

1. **Inicie o back-end:**
   ```bash
   cd backend
   npm run dev
   ```
   O servidor back-end estará rodando em `http://localhost:3001` (ou a porta configurada).

2. **Inicie o front-end:**
   ```bash
   cd ..
   npm run dev
   ```
   A aplicação front-end estará disponível em `http://localhost:3000` (ou a porta configurada pelo Vite).
