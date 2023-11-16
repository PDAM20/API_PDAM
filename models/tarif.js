'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tarif extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tarif.init({
    golongan_id: DataTypes.INTEGER,
    min: DataTypes.INTEGER,
    max: DataTypes.INTEGER,
    harga: DataTypes.INTEGER,
    istetap: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'tarif',
  });
  return tarif;
};