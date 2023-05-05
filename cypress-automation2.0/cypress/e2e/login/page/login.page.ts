/// <reference path="../../../support/index.ts" />

import loginElements from './login.elements';

class loginPage {
    accessarUrlLogin() {
        cy.visit('/');
    }

    preencherUsuario(user) {
        cy.get(loginElements.txt_user).type(user);
    }

    preencherSenha(password) {
        cy.get(loginElements.txt_password).type(password, { log: false });
    }

    clicarBtnEntrar() {
        cy.get(loginElements.btn_log_in).click({ force: true });
    }
}

export default new loginPage();