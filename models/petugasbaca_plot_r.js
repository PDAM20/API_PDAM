'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class petugasbaca_plot_r extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  petugasbaca_plot_r.init({
    petugas_id: DataTypes.INTEGER,
    rayon_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'petugasbaca_plot_r',
  });
  return petugasbaca_plot_r;
};