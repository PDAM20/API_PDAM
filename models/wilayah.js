'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wilayah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      wilayah.hasMany(models.rayon, { foreignKey : 'wilayah_id' });
    }
  }
  wilayah.init({
    nama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'wilayah',
  });
  return wilayah;
};