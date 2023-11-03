'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_kelainan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_kelainan.hasMany(models.tb_pelanggan, {foreignKey: 'id_kelainan'})
    }
  }
  tb_kelainan.init({
    nama_kelainan: DataTypes.STRING,
    keterangan: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'tb_kelainan',
  });
  return tb_kelainan;
};