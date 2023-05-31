'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ingrid', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      brand: {
        type: Sequelize.STRING,
      },
      packing: {
        type: Sequelize.STRING,
      },
      info1: {
        type: Sequelize.STRING(2048),
      },
      info2: {
        type: Sequelize.STRING(2048),
      },
      info3: {
        type: Sequelize.STRING(2048),
      },
      info4: {
        type: Sequelize.STRING(2048),
      },
      vendorCode: {
        type: Sequelize.STRING,
      },
      images: {
        type: Sequelize.STRING(2048),
      },
      inStocks: {
        type: Sequelize.INTEGER,
      },
      bestsellers: {
        type: Sequelize.BOOLEAN,
      },
      new: {
        type: Sequelize.BOOLEAN,
      },
      popularity: {
        type: Sequelize.INTEGER,
      },
      compatibility: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ingrids');
  },
};
