'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class daftarbacameter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  daftarbacameter.init({
    tahunbln: DataTypes.STRING,
    namabulan: DataTypes.STRING,
    jumpelanggan: DataTypes.INTEGER,
    sudahbaca: DataTypes.INTEGER,
    belumbaca: DataTypes.INTEGER,
    jumpakai: DataTypes.INTEGER,
    totalrekening: DataTypes.INTEGER,
    totalkelainan: DataTypes.INTEGER,
    totaltaksir: DataTypes.INTEGER,
    totaladafotorumah: DataTypes.INTEGER,
    tanggaldibuat: DataTypes.DATE,
    aktif: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'daftarbacameter',
  });
  return daftarbacameter;
};