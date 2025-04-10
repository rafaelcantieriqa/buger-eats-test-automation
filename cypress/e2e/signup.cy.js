import signupPage from '../pages/signup_page';
import homePage from '../pages/home_page';
import { createDeliver } from '../support/factories/deliverFactory';

describe('Fluxo de Cadastro - Buger Eats', () => {

    beforeEach('Acessar a pagina home ', () => {
        homePage.visitHome()
    })

    it('Deve cadastrar um novo entregador com sucesso', () => {
        const user = createDeliver();

        signupPage.visit();

        signupPage.fillFullName(user.fullName);
        signupPage.fillCpf(user.cpf);
        signupPage.fillEmail(user.email);
        signupPage.fillWhatsapp(user.whatsapp);
        signupPage.fillPostalCode(user.postalcode);
        signupPage.clickSearchCep();
        signupPage.fillAddressNumber(user.number);
        signupPage.fillComplement(user.complement);
        signupPage.clickDeliveryMethod(user.deliveryMethod);
        signupPage.uploadCnh(user.cnh);
        signupPage.submit();

        signupPage.validateMessagesuccess();
        signupPage.clickCloseModal();
    });
});


it('Não deve permitir cadastro com e-mail inválido', () => {
    const user = createDeliver();
    user.email = 'emailinvalido.com';
    signupPage.visit();

    signupPage.fillFullName(user.fullName);
    signupPage.fillCpf(user.cpf);
    signupPage.fillEmail(user.email);
    signupPage.fillWhatsapp(user.whatsapp);
    signupPage.fillPostalCode(user.postalcode);
    signupPage.clickSearchCep();
    signupPage.fillAddressNumber(user.number);
    signupPage.fillComplement(user.complement);
    signupPage.clickDeliveryMethod(user.deliveryMethod);
    signupPage.uploadCnh('image/cnh-digital.jpg');
    signupPage.submit();

    signupPage.validateMessageError('Oops! Email com formato inválido.');
});



it('Não deve permitir cadastro com CPF inválido', () => {
    const user = createDeliver();
    user.cpf = '123.456.789-00'; // CPF inválido

    signupPage.visit();
    signupPage.fillFullName(user.fullName);
    signupPage.fillCpf(user.cpf);
    signupPage.fillEmail(user.email);
    signupPage.fillWhatsapp(user.whatsapp);
    signupPage.fillPostalCode(user.postalcode);
    signupPage.clickSearchCep();
    signupPage.fillAddressNumber(user.number);
    signupPage.fillComplement(user.complement);
    signupPage.clickDeliveryMethod(user.deliveryMethod);
    signupPage.uploadCnh('image/cnh-digital.jpg');
    signupPage.submit();

    signupPage.validateMessageError('Oops! CPF inválido');
});


it('Não deve permitir cadastro sem preencher os campos obrigatórios', () => {
    signupPage.visit();
    signupPage.submit();

    signupPage.validateMessageError('É necessário informar o nome');
    signupPage.validateMessageError('É necessário informar o CPF');
    signupPage.validateMessageError('É necessário informar o email');
    signupPage.validateMessageError('É necessário informar o CEP');
    signupPage.validateMessageError('Adicione uma foto da sua CNH');
});

it('Não deve permitir cadastro com CEP inválido', () => {
    const user = createDeliver();
    user.postalcode = '000000000';
    signupPage.visit();

    signupPage.fillFullName(user.fullName);
    signupPage.fillCpf(user.cpf);
    signupPage.fillEmail(user.email);
    signupPage.fillWhatsapp(user.whatsapp);
    signupPage.fillPostalCode(user.postalcode);
    signupPage.clickSearchCep();
    signupPage.validateMessageError('Informe um CEP válido');
});

it('Não deve permitir cadastro sem método de entrega selecionado', () => {
    const user = createDeliver();
    signupPage.visit();

    signupPage.fillFullName(user.fullName);
    signupPage.fillCpf(user.cpf);
    signupPage.fillEmail(user.email);
    signupPage.fillWhatsapp(user.whatsapp);
    signupPage.fillPostalCode(user.postalcode);
    signupPage.clickSearchCep();
    signupPage.fillAddressNumber(user.number);
    signupPage.fillComplement(user.complement);
    signupPage.uploadCnh('image/cnh-digital.jpg');   // abrir um bug 
    signupPage.submit();

    signupPage.validateMessageError('Selecione o método de entrega');
});

it('Não deve permitir cadastro sem anexar CNH', () => {
    const user = createDeliver();
    signupPage.visit();

    signupPage.fillFullName(user.fullName);
    signupPage.fillCpf(user.cpf);
    signupPage.fillEmail(user.email);
    signupPage.fillWhatsapp(user.whatsapp);
    signupPage.fillPostalCode(user.postalcode);
    signupPage.clickSearchCep();
    signupPage.fillAddressNumber(user.number);
    signupPage.fillComplement(user.complement);
    signupPage.clickDeliveryMethod(user.deliveryMethod);
    // sem uploadCnh
    signupPage.submit();

    signupPage.validateMessageError('Adicione uma foto da sua CNH');
});








