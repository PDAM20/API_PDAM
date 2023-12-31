'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class merek_meter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      merek_meter.hasMany(models.pelanggan, {foreignKey : 'merek_id'});
    }
  }
  merek_meter.init({
    nama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'merek_meter',
  });
  return merek_meter;
};