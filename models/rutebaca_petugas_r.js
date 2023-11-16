'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rutebaca_petugas_r extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rutebaca_petugas_r.init({
    petugas_id: DataTypes.INTEGER,
    rayon_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rutebaca_petugas_r',
  });
  return rutebaca_petugas_r;
};