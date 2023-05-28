const { faker } = require(`@faker-js/faker`);

('use strict');

const brands = ['Германия', 'Италия', 'Польша', 'Россия'];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Ingrid',
      [...Array(100)].map(() => ({
        brand: brands[Math.floor(Math.random() * brands.length)],
        price: faker.string.numeric(4),
        name: faker.lorem.sentence(2),
        info1: faker.lorem.sentence(15),
        info2: faker.lorem.sentence(15),
        info3: faker.lorem.sentence(15),
        info4: faker.lorem.sentence(15),
        images: JSON.stringify(
          [...Array(7)].map(
            () => `${faker.image.url()}?ramdom=${faker.string.numeric(30)}`,
          ),
        ),
        vendorCode: faker.internet.password(),
        inStocks: faker.string.numeric(1),
        bestsellers: faker.datatype.boolean(),
        new: faker.datatype.boolean(),
        popularity: faker.string.numeric(3),
        compatibility: faker.lorem.sentence(7),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Ingrid', null, {});
  },
};
