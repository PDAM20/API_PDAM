'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hasilbacas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      no_pelanggan: {
        type: Sequelize.STRING
      },
      periode: {
        type: Sequelize.STRING
      },
      nama: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      kec_id: {
        type: Sequelize.INTEGER
      },
      kec: {
        type: Sequelize.STRING
      },
      kel_id: {
        type: Sequelize.INTEGER
      },
      kel: {
        type: Sequelize.STRING
      },
      rayon_id: {
        type: Sequelize.INTEGER
      },
      kode_rayon: {
        type: Sequelize.STRING
      },
      rayon: {
        type: Sequelize.STRING
      },
      jalan_id: {
        type: Sequelize.INTEGER
      },
      jalan: {
        type: Sequelize.STRING
      },
      wilayah_id: {
        type: Sequelize.STRING
      },
      wilayah: {
        type: Sequelize.STRING
      },
      diameter_id: {
        type: Sequelize.INTEGER
      },
      diameter: {
        type: Sequelize.STRING
      },
      gol_id: {
        type: Sequelize.INTEGER
      },
      kodegol: {
        type: Sequelize.STRING
      },
      golongan: {
        type: Sequelize.STRING
      },
      gol_id_baru: {
        type: Sequelize.INTEGER
      },
      kodegol_baru: {
        type: Sequelize.STRING
      },
      golongan_baru: {
        type: Sequelize.STRING
      },
      perubahangol: {
        type: Sequelize.TINYINT
      },
      merek_id: {
        type: Sequelize.INTEGER
      },
      merek_meter: {
        type: Sequelize.STRING
      },
      merek_id_baru: {
        type: Sequelize.INTEGER
      },
      merek_meter_baru: {
        type: Sequelize.STRING
      },
      perubahanmeter: {
        type: Sequelize.TINYINT
      },
      stanlalu: {
        type: Sequelize.INTEGER
      },
      stanskrg: {
        type: Sequelize.INTEGER
      },
      pakaiskrg: {
        type: Sequelize.INTEGER
      },
      urutanbaca: {
        type: Sequelize.INTEGER
      },
      stanangkat: {
        type: Sequelize.INTEGER
      },
      persen: {
        type: Sequelize.DECIMAL
      },
      harga_air: {
        type: Sequelize.INTEGER
      },
      airlimbah: {
        type: Sequelize.INTEGER
      },
      administrasi: {
        type: Sequelize.INTEGER
      },
      pemeliharaan: {
        type: Sequelize.INTEGER
      },
      retribusi: {
        type: Sequelize.INTEGER
      },
      pelayanan: {
        type: Sequelize.INTEGER
      },
      meterai: {
        type: Sequelize.INTEGER
      },
      totalrekening: {
        type: Sequelize.INTEGER
      },
      sudahbaca: {
        type: Sequelize.TINYINT
      },
      verifikasi: {
        type: Sequelize.TINYINT
      },
      flagbacamanual: {
        type: Sequelize.TINYINT
      },
      flagkoreksi: {
        type: Sequelize.TINYINT
      },
      adafotorumah: {
        type: Sequelize.TINYINT
      },
      adavideo: {
        type: Sequelize.TINYINT
      },
      flagsudahupload: {
        type: Sequelize.TINYINT
      },
      flagaktif: {
        type: Sequelize.TINYINT
      },
      flagreq_bc_ulang: {
        type: Sequelize.TINYINT
      },
      stan_req_bc_ulang: {
        type: Sequelize.INTEGER
      },
      petugas_id_plot: {
        type: Sequelize.INTEGER
      },
      petugas_plot: {
        type: Sequelize.STRING
      },
      petugas_id_baca: {
        type: Sequelize.INTEGER
      },
      petugas_baca: {
        type: Sequelize.STRING
      },
      kelainan_id: {
        type: Sequelize.INTEGER
      },
      kelainan: {
        type: Sequelize.STRING
      },
      datalapangan: {
        type: Sequelize.INTEGER
      },
      waktuverifikasi: {
        type: Sequelize.DATE
      },
      waktubaca: {
        type: Sequelize.DATE
      },
      waktubacalalu: {
        type: Sequelize.DATE
      },
      waktuupload: {
        type: Sequelize.DATE
      },
      iduserkoreksi: {
        type: Sequelize.INTEGER
      },
      userkoreksi: {
        type: Sequelize.STRING
      },
      iduserverifikasi: {
        type: Sequelize.INTEGER
      },
      userverifikasi: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.STRING
      },
      longitude: {
        type: Sequelize.STRING
      },
      memolapangan: {
        type: Sequelize.STRING
      },
      keterangan: {
        type: Sequelize.STRING
      },
      bln1: {
        type: Sequelize.STRING
      },
      stan1: {
        type: Sequelize.INTEGER
      },
      pakai1: {
        type: Sequelize.INTEGER
      },
      persen1: {
        type: Sequelize.DECIMAL
      },
      bln2: {
        type: Sequelize.STRING
      },
      stan2: {
        type: Sequelize.INTEGER
      },
      pakai2: {
        type: Sequelize.INTEGER
      },
      persen2: {
        type: Sequelize.DECIMAL
      },
      bln3: {
        type: Sequelize.STRING
      },
      stan3: {
        type: Sequelize.INTEGER
      },
      pakai3: {
        type: Sequelize.INTEGER
      },
      persen3: {
        type: Sequelize.DECIMAL
      },
      kelainan1: {
        type: Sequelize.STRING
      },
      kelainan2: {
        type: Sequelize.STRING
      },
      kelainan3: {
        type: Sequelize.STRING
      },
      rtrt3bln_pakai: {
        type: Sequelize.INTEGER
      },
      rtrt3bln_persen: {
        type: Sequelize.DECIMAL
      },
      masterlatlong: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('hasilbacas');
  }
};