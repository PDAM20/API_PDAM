'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rayon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rayon.init({
    wilayah_id: DataTypes.INTEGER,
    kode_rayon: DataTypes.STRING,
    nama: DataTypes.STRING,
    aktif: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'rayon',
  });
  return rayon;
};