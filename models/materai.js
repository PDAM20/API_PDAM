'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Materai.init({
    min: DataTypes.TINYINT,
    max: DataTypes.TINYINT,
    by_materai: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'Materai',
  });
  return Materai;
};