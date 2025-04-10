import homePage from '../pages/home_page';

describe('Acesso à página inicial do Buger Eats', () => {
    it('Deve carregar a página inicial com sucesso', () => {
        homePage.visitHome();
        homePage.checkHomeLoaded();
    });
});
