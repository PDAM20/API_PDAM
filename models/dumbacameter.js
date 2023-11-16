'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dumbacameter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dumbacameter.init({
    pelanggan_id: DataTypes.BIGINT,
    periode_baca: DataTypes.STRING,
    no_pelanggan: DataTypes.STRING,
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    golongan_id: DataTypes.BIGINT,
    stan_ini: DataTypes.INTEGER,
    stan_lalu: DataTypes.INTEGER,
    pemakaian: DataTypes.INTEGER,
    kelainan: DataTypes.STRING,
    pakai_1bln_lalu: DataTypes.INTEGER,
    pakai_2bln_lalu: DataTypes.INTEGER,
    pakai_3bln_lalu: DataTypes.INTEGER,
    foto1: DataTypes.STRING,
    foto2: DataTypes.STRING,
    foto3: DataTypes.STRING,
    pembaca_id: DataTypes.BIGINT,
    longlat: DataTypes.STRING,
    tgl_baca: DataTypes.DATE,
    tgl_upload: DataTypes.DATE,
    dikirim: DataTypes.TINYINT,
    sudah_baca: DataTypes.TINYINT,
    estimasi: DataTypes.INTEGER,
    urut_baca: DataTypes.INTEGER,
    ket_edit: DataTypes.STRING,
    memo: DataTypes.STRING,
    unit_id: DataTypes.BIGINT,
    rayon_id: DataTypes.BIGINT,
    jalan_id: DataTypes.BIGINT,
    video: DataTypes.STRING,
    tarif_id: DataTypes.BIGINT,
    verified_at: DataTypes.DATE,
    request_baca_ulang: DataTypes.TINYINT,
    verified_by: DataTypes.STRING,
    kelainan_1bln_lalu: DataTypes.STRING,
    kelainan_2bln_lalu: DataTypes.STRING,
    kelainan_3bln_lalu: DataTypes.STRING,
    stan_angkat: DataTypes.INTEGER,
    stan_1bln_lalu: DataTypes.INTEGER,
    stan_2bln_lalu: DataTypes.INTEGER,
    stan_3bln_lalu: DataTypes.INTEGER,
    diameter_id: DataTypes.BIGINT,
    nama_jalan: DataTypes.STRING,
    nama_rayon: DataTypes.STRING,
    nama_unit: DataTypes.STRING,
    kode_golongan: DataTypes.STRING,
    nama_diameter: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dumbacameter',
  });
  return dumbacameter;
};