'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_petugas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_petugas.init({
    nama: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    no_telp: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.ENUM({
      values: ['pria', 'wanita']
    }),
  }, {
    sequelize,
    modelName: 'tb_petugas',
  });
  return tb_petugas;
};