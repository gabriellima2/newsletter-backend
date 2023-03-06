# Newsletter - Backend

Para praticar Clean Architecture, desenvolvi esse projeto semelhante à uma inscrição em um sistema de newsletter.
Explorei bastante as camadas da Clean Architecture e vou usar esse projeto como base para outros que irei implementar com essa arquitetura!

<h2>Dificuldades</h2>
Passei dificuldades na camada Interface, onde precisava usar tipagens que faziam uso de terceiros como os Repositories com Prisma ORM e Controllers para os endpoints com Express.
Então, defini modelos na camada Domain e implementar na camada Infrastructure.

<h2>Estrutura</h2>

```bash
--- src/
    -- domain: Definição de lógicas e models reaproveitáveis em qualquer aplicação(Web, Mobile) e frameworks.
    -- use-cases: Implementação dos casos de usos especifícos para a aplicação.
    -- infra: Camada externa da aplicação. Faz uso de ferramentas de terceiros e, nesse caso, define adapters e controllers.
    -- data: Definição de utilitários referentes à conexões e transferências de dados entre aplicações.
    -- validations: Mantém as validações criadas para cada caso de uso.
```

<h2>Ferramentas</h2>

- [NodeJS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Prisma](https://www.prisma.io/)
- [Zod](https://zod.dev/)

<h2>Rodando o projeto</h2>

Você precisa ter o [NodeJS](https://nodejs.org/en/), o [Git](https://git-scm.com/) e o gerenciador de pacotes([NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) instalados em sua máquina.

```bash
1. Clone o repositório:
$ git clone https://github.com/gabriellima2/newsletter-backend.git

2. Acesse a pasta e instale as dependências via terminal:
$ npm i

3. Gere o cliente Prisma com o Schema já definido:
$ npx prisma generate

4. Inicie a aplicação em modo de desenvolvimento:
$ npm run dev

O servidor será aberto em localhost:3001
```

<p align="center">Projeto feito com 💙 por <a href="https://www.linkedin.com/in/gabriel-lima-860612236">Gabriel Lima</a></p>
