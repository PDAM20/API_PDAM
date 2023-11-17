'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class setting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  setting.init({
    lokalpathftp: DataTypes.STRING,
    lokalfolderfoto: DataTypes.STRING,
    remotefolderfoto: DataTypes.STRING,
    virtualdirfoto: DataTypes.STRING,
    alamatwebinfo: DataTypes.STRING,
    flagstaticmap: DataTypes.STRING,
    folderbackup: DataTypes.STRING,
    bolehbc2step: DataTypes.TINYINT,
    bolehbcbarcode: DataTypes.TINYINT,
    bolehbclastdigit: DataTypes.TINYINT,
    bolehbcdatabase: DataTypes.TINYINT,
    strictbcbylatlong: DataTypes.TINYINT,
    strictbcgps: DataTypes.TINYINT,
    rutebyrayon: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'setting',
  });
  return setting;
};