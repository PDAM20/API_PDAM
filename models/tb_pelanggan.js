'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_pelanggan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_pelanggan.belongsTo(models.tb_kelainan, {foreignKey : 'id_kelainan'});
    }
  }
  tb_pelanggan.init({
    id_kelainan: DataTypes.STRING,
    kode_pelanggan: DataTypes.STRING,
    nama: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    air_sl: DataTypes.INTEGER,
    air_habis: DataTypes.INTEGER,
    rayon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_pelanggan',
  });
  return tb_pelanggan;
};