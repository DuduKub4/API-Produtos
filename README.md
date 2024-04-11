Locadora API
A Locadora API é um projeto de sistema de gerenciamento de filmes e usuários para uma locadora fictícia. Ele fornece endpoints para criar, listar e alugar filmes, bem como para criar e listar usuários.

Uso
A API fornece os seguintes endpoints:

POST /movies: Cria um novo filme.
GET /movies/release: Retorna os filmes ordenados por data de lançamento.
POST /movies/rent: Permite alugar um filme especificado pelo ID do filme e pelo ID do usuário.
POST /users: Cria um novo usuário.
GET /users: Retorna todos os usuários cadastrados.
Certifique-se de enviar solicitações HTTP adequadas para os endpoints conforme documentado para interagir com a API.

Node.js
Fastify
Prisma
TypeScript
