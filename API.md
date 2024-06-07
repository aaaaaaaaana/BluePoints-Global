## Endpoints do Projeto BluePoints

Este README descreve os endpoints da API do projeto, detalhando os métodos, parâmetros e respostas esperadas.

### Autenticação

#### Endpoint: `/auth/login`

#### Método: POST

#### Parâmetros:

* `username` (string): Nome de usuário do usuário.
* `password` (string): Senha do usuário.

#### Resposta:

* **Sucesso:** Um token JWT (JSON Web Token) é retornado como um header `Authorization` na resposta.
* **Falha:** Um código de status 401 (Unauthorized) é retornado com uma mensagem de erro.

#### Exemplo de Request:

```json
{
  "username": "user123",
  "password": "password123"
}

