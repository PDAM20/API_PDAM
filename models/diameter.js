'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class diameter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  diameter.init({
    nama: DataTypes.STRING,
    by_pemeliaharaan: DataTypes.INTEGER,
    by_administrasi: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'diameter',
  });
  return diameter;
};