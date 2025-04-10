class homePage {
    visitHome() {
        cy.visit('https://buger-eats-qa.vercel.app/');
    }

    checkHomeLoaded() {
        cy.contains('Cadastre-se para fazer entregas').should('be.visible');
    }
}

export default new homePage();
