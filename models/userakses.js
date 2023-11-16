'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userakses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userakses.init({
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    tgllahir: DataTypes.DATE,
    telpon: DataTypes.STRING,
    mulaikerja: DataTypes.DATE,
    foto: DataTypes.STRING,
    idjabatan: DataTypes.INTEGER,
    namauser: DataTypes.STRING,
    passworduser: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    aktif: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userakses',
  });
  return userakses;
};