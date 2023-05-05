# cypress-automation2.0
# [Loyalty]()

Projeto de automação de testes responsável por garantir os fluxos e2e do Loyalty.

## Stack

- [node js](https://nodejs.org/en/)
- [cypress](https://www.cypress.io/)

## Initial Setup

```shell
git clone 
cd cypress-automation
npm install
```

## Open Execution of Tests
Depois de definir sua configuração inicial, você pode executar o comando **npm run test:open** para executar testes no modo interativo, onde você pode assistir aos testes em execução, além de usar os recursos de time-travel e automatic reload features.

```
npm run test:open
```

## Headless Execution of Tests
Existe uma maneira mais rápida de executar os testes que seria sem o modo interativo no qual o usuário não pode ver o teste sendo executado.

```
npm run test:headless
```

## Environments
É necessário criar um arquivo localmente na raiz do projeto com suas credenciais de acesso, para que os testes sejam executados com sucesso, pois este arquivo `cypress.env.json` não está sendo versionado no git.

Examples: 
```json
{
    "user": "teste.automatizado",
    "password": ""
}
```

## Commands
Também é possível saber quais cenários foram automatizados executando os seguintes comandos:

Lista o nome dos cenários de cada spec
```
lista de execução npm:spec:nomes
```

Lista a quantidade de cenários por tag
```
npm run count:by:tags
```

## Report
Após executar os testes usando o comando **npm run test:headless** um arquivo .html é gerado na pasta do projeto cypress-automation\cypress\reports\html\index.html

## Confluence
- 
