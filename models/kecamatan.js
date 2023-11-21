'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kecamatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      kecamatan.hasMany(models.kelurahan, {foreignKey : 'kec_id'})
      kecamatan.hasMany(models.pelanggan, {foreignKey : 'kec_id'})
    }
  }
  kecamatan.init({
    nama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kecamatan',
  });
  return kecamatan;
};