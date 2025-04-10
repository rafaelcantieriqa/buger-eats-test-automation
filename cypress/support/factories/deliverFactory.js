import { faker } from '@faker-js/faker';

export function createDeliver() {
  return {
    fullName: faker.person.fullName(),
    cpf: faker.string.numeric(11), // ou use uma lib de CPF se quiser válido
    email: faker.internet.email(),
    whatsapp: faker.phone.number('119########'),
    postalcode: '04534011',
    number: faker.location.buildingNumber(),
    complement: faker.location.secondaryAddress(),
    deliveryMethod: 'Moto',
    cnh: 'image/cnh-digital.jpg' 
  };
}
