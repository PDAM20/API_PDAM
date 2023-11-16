'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jalan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jalan.init({
    nama: DataTypes.STRING,
    aktif: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'jalan',
  });
  return jalan;
};