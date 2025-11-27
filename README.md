---
# 🔀 Rotas e CRUD com Express

Projeto focado na construção de rotas e manipulação de requisições HTTP, simulando um CRUD (Create, Read, Update, Delete) com dados em memória.

## 🧠 Conceitos Abordados
* **Roteamento:** Como o servidor responde a caminhos específicos (`/usuarios`).
* **Verbos HTTP:** Implementação de `GET`, `POST`, `PUT` e `DELETE`.
* **Body Parsing:** Uso do middleware `express.json()` para ler JSON enviado pelo cliente.
* **Testes de API:** Uso de ferramentas como Thunder Client/Postman para validar endpoints.

## ⚙️ Endpoints
| Método | Rota | Descrição |
|---|---|---|
| GET | `/usuarios` | Lista todos os usuários |
| POST | `/usuarios` | Cria um novo usuário |
| PUT | `/usuarios/:id` | Atualiza um usuário existente |
| DELETE | `/usuarios/:id` | Remove um usuário |

## 📦 Como testar
Execute o servidor:
```bash
npm run start
```

> Utilize o Thunder Client ou Postman para enviar requisições para http://localhost:3000.
