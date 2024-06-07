## Endpoints do Projeto BluePoints

Bem-vindo ao BluePoints! Aqui você encontrará informações sobre como usar nossos endpoints para acessar, cadastrar e visualizar seus pontos no aplicativo.

### Autenticação

#### Endpoint: `/auth/usuario`

#### Método: POST

#### Parâmetros:

* `email` (string): Email do usuário.
* `senha` (string): Senha do usuário.

#### Resposta:

* **Sucesso:** Um código de status 200 (OK) é retornado com os dados do usuário autenticado em formato JSON, incluindo id, email, e informações da pessoa associada ao usuário.
* **Falha:** Um código de status 401 (Unauthorized) é retornado com uma mensagem de erro.

#### Exemplo de Request:

```json
{
  "email": "carlos.bezerra@example.com",
  "senha": "senha123"
}


#### Exemplo de Response (Sucesso):

```json
{
  "id": 123,
  "email": "carlos.bezerra@example.com",
  "pessoa": {
    "id": 456,
    "nome": "Carlos",
    "sobrenome": "Bezerra",
    "pontos": 1000
  }
}
