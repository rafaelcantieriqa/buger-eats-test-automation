
##  Sobre o projeto
O Buger Eats - Cypress E2E Test Automation é um projeto de automação de testes criado para validar o fluxo de cadastro de entregadores no site fictício Buger Eats, utilizado como prática de testes end-to-end com o framework Cypress.

- A automação cobre os principais cenários do formulário de cadastro, garantindo que:

- Os dados inseridos sejam validados corretamente (CPF, e-mail, telefone, etc.);

- Campos obrigatórios estejam sendo exigidos;

- A busca de endereço via CEP funcione como esperado;

- O upload de imagem da CNH ocorra com sucesso;

- A seleção do método de entrega seja obrigatória;

- O sistema exiba corretamente mensagens de sucesso ou erro.

Com isso, o projeto simula o comportamento de um usuário real preenchendo o formulário e garante que o fluxo esteja funcionando conforme o esperado, contribuindo para a qualidade do software.

---

##  Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes E2E
- JavaScript (ES6)
- Node.js
- Faker.js (geração de dados fake)


---

##  Como executar os testes

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/buger-eats-cypress-tests.git
cd buger-eats-cypress-tests
```
### 2.  Instale as dependências

```bash
npm install
```
### 3. Execute os testes

```bash
npx cypress open

```
Modo headless (terminal):
```bash
npx cypress run
```

## 🔍 Casos de teste automatizados
- ✅ Cadastro com dados válidos

- ❌ CPF inválido

- ❌ E-mail inválido

- ❌ Número de WhatsApp inválido

- ❌ CEP inválido

- ❌ Campos obrigatórios vazios

- ❌ Upload de CNH inválido ou ausente

- ❌ Método de entrega não selecionado
