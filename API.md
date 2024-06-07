## Endpoints do Projeto BluePoints

Bem-vindo ao BluePoints! Aqui você encontrará informações sobre como usar nossos endpoints para acessar, cadastrar e visualizar seus pontos no aplicativo.

### Autenticação

#### Endpoint: `/auth/usuario`

#### Método: POST

#### Parâmetros:

* `email` (string): Email do usuário.
* `senha` (string): Senha do usuário.

#### Resposta:

* **Sucesso:** Um código de status 200 (OK) é retornado com uma mensagem de sucesso.
* **Falha:** Um código de status 401 (Unauthorized) é retornado com uma mensagem de erro.

#### Exemplo de Request:

```json
{
  "email": "carlos.bezerra@example.com",
  "senha": "senha123"
}

