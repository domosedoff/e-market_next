'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingrid extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ingrid.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.NUMBER,
      brand: DataTypes.STRING,
      packing: DataTypes.STRING,
      info1: DataTypes.STRING,
      info2: DataTypes.STRING,
      info3: DataTypes.STRING,
      info4: DataTypes.STRING,
      vendorCode: DataTypes.NUMBER,
      images: DataTypes.STRING,
      inStocks: DataTypes.NUMBER,
      bestsellers: DataTypes.BOOLEAN,
      new: DataTypes.BOOLEAN,
      popularity: DataTypes.NUMBER,
      compatibility: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Ingrid',
    },
  );
  return Ingrid;
};
