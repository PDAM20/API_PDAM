'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class golongan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      golongan.belongsTo(models.sktarif, {foreignKey : 'idsktarif'})
      golongan.hasMany(models.tarif, {foreignKey : 'golongan_id'})
    }
  }
  golongan.init({
    kode_golongan: DataTypes.STRING,
    nama: DataTypes.STRING,
    kode_akun: DataTypes.STRING,
    administrasi: DataTypes.INTEGER,
    pemeliharaan: DataTypes.INTEGER,
    denda1: DataTypes.INTEGER,
    persendenda1: DataTypes.SMALLINT,
    denda2: DataTypes.INTEGER,
    denda3: DataTypes.INTEGER,
    minpakai: DataTypes.SMALLINT,
    idsktarif: DataTypes.TINYINT,
    retribusi: DataTypes.INTEGER,
    pelayanan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'golongan',
  });
  return golongan;
};