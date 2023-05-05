/// <reference path="../../support/index.ts" />

import loginPage from "../login/page/login.page";

describe('Login', { tags: ['hml', '@login'] }, () => {
    const user = Cypress.env('user');
    const password = Cypress.env('password')

    it('Login successfully', () => {
        loginPage.accessarUrlLogin();
        loginPage.preencherUsuario(user);
        loginPage.preencherSenha(password);
        loginPage.clicarBtnEntrar();
    })
})