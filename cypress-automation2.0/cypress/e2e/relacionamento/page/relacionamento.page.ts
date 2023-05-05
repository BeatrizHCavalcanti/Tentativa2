/// <reference path="../../../support/index.ts" />

import { delay } from 'cypress/types/bluebird';
import RelacionamentoElements from './relacionamento.elements';

class RelacionamentoPage {
    accessarUrlLogin(user, password) {
        cy.visit('/');
        cy.get(RelacionamentoElements.txt_user).type(user);
        cy.get(RelacionamentoElements.txt_password).type(password, { log: false });
        cy.get(RelacionamentoElements.btn_log_in).click();
        cy.get('button').contains('Aceitar todos os cookies').click();
    }
    //acessos em relacionamento
    AcessarEncarteEmRelacionamento(descricao, data1, linkImagemEncarte) {
        cy.get('mat-list').contains('Relacionamento').click();
        cy.get('mat-list').contains('Encarte').click();
        cy.get('button').contains('Novo Encarte').click();
        cy.get(RelacionamentoElements.txt_descricao).type(descricao);
        cy.get(RelacionamentoElements.txt_inicio).type(data1);
        cy.get(RelacionamentoElements.txt_final).click();
        cy.get('span').contains('MAI 2023').click();
        cy.get('button').contains('2023').click();
        cy.get('button').contains('JUL').click();
        cy.get('button').contains('28').click();
        cy.get(RelacionamentoElements.ativarCheckbox).click();
        cy.get('span').contains('Selecione um Filtro').click();
        cy.get('span').contains('POR LOJA').click();
        cy.get('span').contains('Selecione as Lojas Participantes').click();
        cy.get('span').contains('#ApuNroSorte').click();
        cy.get(RelacionamentoElements.btn_novaImg).click({ force: true });
        cy.get(RelacionamentoElements.txt_linkImg).type(linkImagemEncarte);
        cy.get(RelacionamentoElements.btn_salvarImg).click({ force: true });
        cy.get(RelacionamentoElements.txt_descricao).click({ force: true });
        cy.get(RelacionamentoElements.btn_salvarEncarte).click({ force: true });
        cy.get('button').contains('OK').click();
    }
    edicaoImg() {
        cy.get(RelacionamentoElements.edit_Img).click({ force: true });
        cy.get('a').contains('Voltar').click({ force: true });

    }
    excluirImg() {
        cy.get(RelacionamentoElements.excluir_Img).click();
        cy.get(RelacionamentoElements.btn_cancelarExcluirImg).click({ force: true });
        cy.get(RelacionamentoElements.excluir_Img).click();
        cy.get(RelacionamentoElements.btn_confirmarExcluirImg).contains('Confirmar').click({ force: true });
    }

    AcessarTokenEmRelacionamento() {
        cy.get('mat-list').contains('Relacionamento').click();
        cy.get('mat-list').contains('Token').click();
        cy.get('button').contains('Atualizar').click();
    }
    AcessarNPSEmRelacionamento(descricao, TextoTeste, data1, data2, horario) {
        cy.get('mat-list').contains('Relacionamento').click();
        cy.get('mat-list').contains('NPS').click();
        cy.get('button').contains('Novo Questionário').click();
        cy.get(RelacionamentoElements.txt_nomePesquisa).type(descricao);
        cy.get(RelacionamentoElements.txt_objetivoPesquisa).type(TextoTeste);
        cy.get(RelacionamentoElements.txt_inicio).type(data1);
        cy.get(RelacionamentoElements.txt_final).click();
        cy.get(RelacionamentoElements.txt_final).click();
        cy.get('button').contains('MAI 2023').click();
        cy.get('button').contains('2023').click();
        cy.get('button').contains('28').click();
        cy.get('button').contains('Próximo').click();
        cy.get(RelacionamentoElements.seletor_pesquisa).click();
        cy.get('span').contains('o lab').click();
        cy.get(RelacionamentoElements.txt_coment_pesquisa).type(descricao);
        cy.get(RelacionamentoElements.btn_proximo).click();
        cy.get(RelacionamentoElements.icon_azul_pesquisa).click();
        cy.get(RelacionamentoElements.icon_cinza_pesquisa).click();
        cy.get(RelacionamentoElements.txt_cad_inicial).type(data1);
        cy.get(RelacionamentoElements.txt_cad_final).type(data2);
        cy.get(RelacionamentoElements.text_genero_pesquisa).click({ force: true });
        cy.get('span').contains('Masculino').click();
        cy.get(RelacionamentoElements.text_personas_pesquisa).click({ force: true });
        cy.get('span').contains(' TODA À BASE (Atualização Diária) ').click();
        cy.get(RelacionamentoElements.text_lojas_pesquisa).click({ force: true });
        cy.get('span').contains('Avanco').click();
        cy.get(RelacionamentoElements.ativarCheckbox).click();
        cy.get(RelacionamentoElements.check_comunicarSMS_pesquisa).click({ force: true });
        cy.get('span').contains('Filtrar').click();
        cy.get(RelacionamentoElements.btn_proximo_pesquisa).click();
        //cy.get(RelacionamentoElements.text_hr_envio).click();
        cy.get(RelacionamentoElements.text_hr_envio).type(horario);
        cy.get('span').contains('Salvar como rascunho').click();
        cy.get('span').contains('Agendar envio').click();
        cy.get('button').contains('Sim').click();
        //final ok
    }
    AcessarPessoasEmRelacionamento(descricao, nascimento, cpf, celular, email, cep, endereco, numCurto, bairro, estado, cidade) {
        cy.get('mat-list').contains('Relacionamento').click();
        cy.get('mat-list').contains('Pessoas').click();
        cy.get('span').contains('Novo Cliente').click();
        //cadastro
        cy.get(RelacionamentoElements.inp_check_cadastro).dblclick({ force: true });
        cy.get(RelacionamentoElements.inp_check_permite).dblclick({ force: true });
        cy.get(RelacionamentoElements.inp_check_termo).click({ force: true });
        cy.get(RelacionamentoElements.inp_check_privacidade).click({ force: true });
        cy.get(RelacionamentoElements.inp_nome_pessoas).click({ force: true });
        cy.get(RelacionamentoElements.inp_nome_pessoas).type(descricao);
        cy.get(RelacionamentoElements.inp_nascimento_pessoas).type(nascimento);
        cy.get('div').contains('Sexo').click();
        cy.get('span').contains('Feminino').click();
        cy.get(RelacionamentoElements.inp_cpf_pessoas).type(cpf);
        cy.get(RelacionamentoElements.inp_celular_pessoas).type(celular);
        cy.get(RelacionamentoElements.inp_email_pessoas).type(email);
        cy.get(RelacionamentoElements.inp_cep_pessoas).type(cep);
        cy.get(RelacionamentoElements.inp_endereco_pessoas).click({ force: true });
        cy.get(RelacionamentoElements.inp_endereco_pessoas).type(endereco);
        cy.get(RelacionamentoElements.inp_numCurto_pessoas).type(numCurto);
        cy.get(RelacionamentoElements.inp_bairro_pessoas).type(bairro);
        cy.get('span').contains('Salvar').click();
        cy.get('button').contains('OK').click();
        cy.get(RelacionamentoElements.a_voltar_pessoas).click({ force: true });
        cy.get('span').contains('Atualizar').click();
        //pesquisa 1
        cy.get(RelacionamentoElements.inp_pesquisar_pessoa).type(cpf);
        cy.get('mat-icon').contains('search').click();
        cy.get(RelacionamentoElements.a_exportar_pessoas).click({ force: true });
        cy.get(RelacionamentoElements.inp_emailExportacao_pessoas).type(email);
        cy.get('span').contains('Enviar').click();
        cy.get('button').contains('OK').click();
        cy.get('mat-icon').contains('close').click();
        cy.get(RelacionamentoElements.icon_visualizar_pessoas).click({ force: true });
        cy.get('mat-panel-title').contains('Dados Cadastrais').click();
        cy.get('mat-panel-title').contains('Informações do cliente').dblclick();
        cy.get('mat-panel-title').contains('Histórico de compras').dblclick();
        cy.get(RelacionamentoElements.a_voltar_pessoas).click({ force: true });
        //pesquisa 2
        cy.get(RelacionamentoElements.inp_pesquisar_pessoa).type(descricao);
        cy.get('mat-icon').contains('search').click();
        cy.get(RelacionamentoElements.a_exportar_pessoas).click({ force: true });
        cy.get(RelacionamentoElements.inp_emailExportacao_pessoas).type(email);
        cy.get('span').contains('Enviar').click();
        cy.get('button').contains('OK').click();
        cy.get('mat-icon').contains('close').click();
        cy.get(RelacionamentoElements.icon_editar_pessoas).click({ force: true });
        cy.get('span').contains('Salvar').click();
        cy.get('button').contains('OK').click();
        cy.get(RelacionamentoElements.a_voltar_pessoas).click({ force: true });
        //pesquisa 3
        cy.get(RelacionamentoElements.inp_pesquisar_pessoa).type(cpf);
        cy.get('mat-icon').contains('search').click();
        cy.get(RelacionamentoElements.a_exportar_pessoas).click({ force: true });
        cy.get(RelacionamentoElements.inp_emailExportacao_pessoas).type(email);
        cy.get('span').contains('Enviar').click();
        cy.get('button').contains('OK').click();
        cy.get('mat-icon').contains('close').click();
        //excluir
        /*         cy.get(RelacionamentoElements.icon_excluir_pessoas).click({force:true});
                cy.get('button').contains('Cancelar').click();
                cy.get(RelacionamentoElements.icon_excluir_pessoas).click({force:true});
                cy.get('button').contains('Ok').click({force:true});
                cy.get('button').contains('OK').click();
                cy.get(RelacionamentoElements.a_exportar_pessoas).click({force:true});
                cy.get(RelacionamentoElements.inp_emailExportacao_pessoas).type(email);
                cy.get('span').contains('Enviar').click();
                cy.get('button').contains('OK').click();
                cy.get('mat-icon').contains('close').click(); */
        //filtrar
        cy.get('mat-list').contains('Relacionamento').click();
        cy.get('mat-list').contains('Pessoas').click();
        cy.get('span').contains('Filtros Avançados').click();
        cy.get(RelacionamentoElements.filtrar_genero_pessoas).click({ force: true });
        cy.get('span').contains('Feminino').click();
        cy.get(RelacionamentoElements.btn_filtar_pessoas).click({ force: true });
        cy.get('button').contains('OK').click();
        //cy.get('span').contains('Cadastros Inconsistentes').click();


    }




}

export default new RelacionamentoPage();
