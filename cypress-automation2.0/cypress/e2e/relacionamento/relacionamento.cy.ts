/// <reference path="../../support/index.ts" />

import RelacionamentoElements from "./page/relacionamento.page";
describe('Login', { tags: ['hml', '@login'] }, () => {
    const user = Cypress.env('user');
    const password = Cypress.env('password');
    const descricao = Cypress.env('descricao');
    const data1 = Cypress.env('data1');
    const linkImagemEncarte = Cypress.env('linkImagemEncarte');
    const TextoTeste = Cypress.env('TextoTeste');
    const data2 = Cypress.env('data2');
    const horario = Cypress.env('horario');
    const nascimento =Cypress.env('nascimento');
    const cpf =Cypress.env('cpf');
    const celular =Cypress.env('celular');
    const email =Cypress.env('email');
    const cep =Cypress.env('cep');
    const endereco =Cypress.env('endereco');
    const numCurto = Cypress.env('numCurto');
    const bairro =Cypress.env('bairro');
    const estado =Cypress.env('estado');
    const cidade =Cypress.env('cidade');
// instruções
    it.only('Login + relacionamento > Encarte', () => {
        RelacionamentoElements.accessarUrlLogin(user,password);
        RelacionamentoElements.AcessarEncarteEmRelacionamento(descricao,data1,linkImagemEncarte);
        // RelacionamentoElements.edicaoImg();
        // RelacionamentoElements.excluirImg();
    })
    it('Login + relacionamento > Token', () => {
        RelacionamentoElements.accessarUrlLogin(user,password);
        RelacionamentoElements.AcessarTokenEmRelacionamento();
    });
    it('Login + relacionamento > NPS', () => {
        RelacionamentoElements.accessarUrlLogin(user,password);
        RelacionamentoElements.AcessarNPSEmRelacionamento(descricao,TextoTeste,data1,data2,horario);
    });
    it('Login + relacionamento > Pessoas', () => {
        RelacionamentoElements.accessarUrlLogin(user,password);
        RelacionamentoElements.AcessarPessoasEmRelacionamento(descricao,nascimento,cpf,celular,email,cep,endereco,numCurto,bairro,estado,cidade);
    });
})
