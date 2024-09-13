# Personal Challenger

**Personal Challenger** é uma aplicação backend para o gerenciamento de desafios pessoais, fornecendo funcionalidades para criação, acompanhamento e conclusão de metas pessoais ao longo da semana.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Fastify**: Framework web para Node.js, otimizado para alta performance.
- **Drizzle ORM**: ORM para interações com o banco de dados PostgreSQL.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **Docker**: Utilizado para containerização e facilitação de desenvolvimento.
- **Zod**: Biblioteca para validação de dados.

## Estrutura do Projeto

- **/src/db**: Configurações do banco de dados e esquemas definidos com o Drizzle ORM.
  - `index.ts`: Inicialização do banco de dados.
  - `schema.ts`: Definição dos esquemas de banco de dados.
  - `seed.ts`: Script para popular o banco de dados com dados iniciais.
  
- **/src/functions**: Funções que implementam a lógica de negócios da aplicação.
  - `create-goal.ts`: Função para criar novos objetivos.
  - `create-goal-completion.ts`: Função para marcar objetivos como concluídos.
  - `get-week-pending-goals.ts`: Função para recuperar objetivos pendentes da semana.
  - `get-week-summary.ts`: Função para obter um resumo dos objetivos da semana.

- **/src/http**: Configuração do servidor HTTP usando Fastify.
  - `server.ts`: Configuração e inicialização do servidor Fastify.
  - **/routes**: Define as rotas da API, como criação e atualização de objetivos.

## Configuração

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/victorradael/personal-challenger.git
    cd personal-challenger
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Configure as variáveis de ambiente:**

    Copie o arquivo `.env.example` para `.env` e edite com as configurações apropriadas, como detalhes do banco de dados.

4. **Execute a aplicação:**

    Para iniciar o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

### Uso com Docker

Para iniciar a aplicação usando Docker:

```bash
docker-compose up
```

## Testes

Execute os testes automatizados usando:

```bash
npm run test
```

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o repositório.
2. Crie um branch (`git checkout -b feature/nova-feature`).
3. Faça commit das suas alterações (`git commit -m 'Minha nova feature'`).
4. Envie para o branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.