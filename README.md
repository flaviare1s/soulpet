# 🐾 SoulPet API

> **Gestão inteligente e humanizada para o seu pet shop.**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00000f?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

O **SoulPet** é uma API robusta desenvolvida para gerenciar o ecossistema de um pet shop, permitindo o controle centralizado de clientes, pets e endereços. Focada em performance e organização, a aplicação utiliza o padrão de modelos relacionais para garantir a integridade dos dados dos pets e seus tutores.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído com as melhores práticas de desenvolvimento backend:

*   **Runtime:** [Node.js](https://nodejs.org/)
*   **Framework:** [Express](https://expressjs.com/pt-br/)
*   **ORM:** [Sequelize](https://sequelize.org/) (Abstração de banco de dados SQL)
*   **Segurança:** [CORS](https://www.npmjs.com/package/cors) habilitado para integração segura com o frontend.
*   **Variáveis de Ambiente:** [Dotenv](https://www.npmjs.com/package/dotenv) para gestão de credenciais.

---

## 📁 Estrutura do Projeto

```bash
soulpet-back/
├── config/          # Configuração de conexão com o Banco de Dados
├── models/          # Definição das tabelas (Cliente, Pet, Endereco)
├── routes/          # Definição dos endpoints da API
├── index.js         # Ponto de entrada da aplicação
└── .env.example     # Exemplo de configuração de variáveis de ambiente
```

---

## ⚙️ Como Instalar e Rodar

### Pré-requisitos
*   Node.js instalado (Versão LTS recomendada)
*   MySQL ou outro banco SQL compatível.

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/flaviare1s/soulpet.git
   cd soulpet/soulpet-back
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   Renomeie o arquivo `.env.example` para `.env` e preencha com suas credenciais:
   ```env
   DB_HOST=localhost
   DB_NAME=soulpet_db
   DB_USER=seu_usuario
   DB_PASS=sua_senha
   ```

4. **Inicie o servidor**
   ```bash
   npm start
   ```
   A API estará disponível em `http://localhost:3000` (ou na porta configurada).

---

## 🛤️ Endpoints Principais

A API está dividida em módulos lógicos:

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/clientes` | Lista todos os clientes cadastrados |
| `POST` | `/clientes` | Cadastra um novo cliente |
| `GET` | `/pets` | Lista todos os pets |
| `POST` | `/pets` | Registra um novo pet vinculado a um dono |
| `PUT` | `/pets/:id` | Atualiza dados de um pet específico |


---
*Este projeto foi desenvolvido durante o Bootcamp de Full Stack da SoulCode Academy.*