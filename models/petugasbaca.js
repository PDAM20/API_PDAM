'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class petugasbaca extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  petugasbaca.init({
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    aktif: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'petugasbaca',
  });
  return petugasbaca;
};