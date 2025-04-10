class SignupPage {
    visit() {
        cy.visit('https://buger-eats-qa.vercel.app/deliver');
    }

    // Dados Pessoais
    fillFullName(name) {
        cy.get('input[name="fullName"]').type(name);
    }

    fillCpf(cpf) {
        cy.get('input[name="cpf"]').type(cpf);
    }

    fillEmail(email) {
        cy.get('input[name="email"]').type(email);
    }

    fillWhatsapp(whatsapp) {
        cy.get('input[name="whatsapp"]').type(whatsapp);
    }

    // Endereço
    fillPostalCode(postalcode) {
        cy.get('input[name="postalcode"]').type(postalcode);
    }

    clickSearchCep() {
        cy.get('input[value="Buscar CEP"]').click();
    }

    fillAddressNumber(number) {
        cy.get('input[name="address-number"]').type(number);
    }

    fillComplement(complement) {
        cy.get('input[name="address-details"]').type(complement);
    }

    // Método de entrega
    clickDeliveryMethod(method) {
        cy.contains('li', method).click();
    }

    uploadCnh(filePath) {
        cy.get('input[type="file"]').selectFile(`cypress/fixtures/${filePath}`, { force: true });
    }




    submit() {
        cy.contains('button', 'Cadastre-se para fazer entregas').click();
    }

    validateMessagesuccess() {
        cy.get('.swal2-title').should('have.text', 'Aí Sim...');
        cy.get('.swal2-html-container')
            .should('contain', 'Recebemos os seus dados.');

    }

    clickCloseModal() {
        cy.get('button.swal2-confirm').click();
    }

    validateMessageError(message) {
        cy.get('.alert-error')
            .contains(message)
            .should('be.visible');
    }

}

export default new SignupPage();
