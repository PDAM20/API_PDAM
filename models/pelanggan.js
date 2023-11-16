'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelanggan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pelanggan.init({
    status: DataTypes.TINYINT,
    no_pelanggan: DataTypes.STRING,
    no_lama: DataTypes.STRING,
    no_kartu: DataTypes.STRING,
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    tmp_lahir: DataTypes.STRING,
    tgl_lahir: DataTypes.DATE,
    no_ktp: DataTypes.STRING,
    no_kk: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    no_hp: DataTypes.STRING,
    email: DataTypes.STRING,
    pekerjaan: DataTypes.STRING,
    jumlah_penghuni: DataTypes.INTEGER,
    jenis_bangunan: DataTypes.STRING,
    kepemilikan: DataTypes.STRING,
    nama_pemilik: DataTypes.STRING,
    merek_id: DataTypes.INTEGER,
    no_meter: DataTypes.STRING,
    golongan_id: DataTypes.INTEGER,
    wilayah_id: DataTypes.INTEGER,
    rayon_id: DataTypes.INTEGER,
    jalan_id: DataTypes.INTEGER,
    diameter_id: DataTypes.INTEGER,
    kec_id: DataTypes.INTEGER,
    kel_id: DataTypes.INTEGER,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    tgl_pasif: DataTypes.DATE,
    tgl_pasang: DataTypes.DATE,
    tgl_aktif: DataTypes.DATE,
    mbr: DataTypes.TINYINT,
    urutanbaca: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pelanggan',
  });
  return pelanggan;
};