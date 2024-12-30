# node-lambda-rds-handler

Este projeto foi criado para **implementar** uma função Lambda na AWS, com o objetivo de gerenciar interações com um banco de dados RDS (Relational Database Service). Ele utiliza Node.js para construir uma função Lambda eficiente e escalável que pode ser integrada diretamente a serviços como API Gateway, SQS, ou outros recursos AWS.

## Funcionalidades

- Conexão eficiente com instâncias RDS (MySQL, PostgreSQL, etc.).
- Execução de consultas SQL de forma segura e performática.
- Gerenciamento de conexões utilizando práticas recomendadas para ambientes serverless.
- Configuração simplificada com suporte a variáveis de ambiente.

## Requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados:

- [Node.js](https://nodejs.org/) (versão 14 ou superior).
- [AWS CLI](https://aws.amazon.com/cli/) configurado com credenciais adequadas.
- Uma instância RDS criada e acessível.

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/node-lambda-rds-handler.git
   cd node-lambda-rds-handler
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   DB_HOST=seu-host-rds
   DB_USER=seu-usuario
   DB_PASSWORD=sua-senha
   DB_NAME=nome-do-banco
   DB_PORT=3306 # ou a porta específica do seu banco de dados
   ```

## Estrutura do Projeto

```
node-lambda-rds-handler/
├── node-modules
├── package.json          # Gerenciamento de dependências
└── README.md             # Documentação
```

## Uso

1. **Teste local**

   Você pode usar a biblioteca [AWS SAM CLI](https://aws.amazon.com/serverless/sam/) ou a ferramenta [serverless-offline](https://www.npmjs.com/package/serverless-offline) para testar sua função localmente.

   ```bash
   npm run start
   ```

2. **Implantação na AWS**

   Faça o deploy da função Lambda utilizando o AWS CLI ou frameworks como Serverless Framework:

   ```bash
   serverless deploy
   ```

3. **Exemplo de Evento**

   Use o seguinte payload JSON para testar a função Lambda:
   ```json
   {
     "action": "query",
     "query": "SELECT * FROM tabela_exemplo WHERE id = ?",
     "params": [1]
   }
   ```

## Tecnologias Utilizadas

- **Node.js**: Runtime principal para a função Lambda.
- **AWS Lambda**: Para execução serverless.
- **AWS RDS**: Banco de dados relacional gerenciado.
- **dotenv**: Gerenciamento de variáveis de ambiente.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

---

**Nota:** Certifique-se de revisar as práticas de segurança ao lidar com credenciais e conexões de banco de dados em ambientes serverless.
