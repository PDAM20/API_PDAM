'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kelainan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kelainan.init({
    nama: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    is_taksir: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'Kelainan',
  });
  return Kelainan;
};