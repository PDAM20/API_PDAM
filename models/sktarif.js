'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sktarif extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sktarif.init({
    tahun: DataTypes.INTEGER,
    nomor_sk: DataTypes.STRING,
    aktif: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'sktarif',
  });
  return sktarif;
};