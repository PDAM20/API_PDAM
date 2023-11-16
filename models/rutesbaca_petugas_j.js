'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rutesbaca_petugas_j extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rutesbaca_petugas_j.init({
    petugas_id: DataTypes.INTEGER,
    jalan_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rutesbaca_petugas_j',
  });
  return rutesbaca_petugas_j;
};