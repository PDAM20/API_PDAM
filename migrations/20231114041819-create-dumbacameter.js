'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dumbacameters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pelanggan_id: {
        type: Sequelize.BIGINT
      },
      periode_baca: {
        type: Sequelize.STRING
      },
      no_pelanggan: {
        type: Sequelize.STRING
      },
      nama: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      golongan_id: {
        type: Sequelize.BIGINT
      },
      stan_ini: {
        type: Sequelize.INTEGER
      },
      stan_lalu: {
        type: Sequelize.INTEGER
      },
      pemakaian: {
        type: Sequelize.INTEGER
      },
      kelainan: {
        type: Sequelize.STRING
      },
      pakai_1bln_lalu: {
        type: Sequelize.INTEGER
      },
      pakai_2bln_lalu: {
        type: Sequelize.INTEGER
      },
      pakai_3bln_lalu: {
        type: Sequelize.INTEGER
      },
      foto1: {
        type: Sequelize.STRING
      },
      foto2: {
        type: Sequelize.STRING
      },
      foto3: {
        type: Sequelize.STRING
      },
      pembaca_id: {
        type: Sequelize.BIGINT
      },
      longlat: {
        type: Sequelize.STRING
      },
      tgl_baca: {
        type: Sequelize.DATE
      },
      tgl_upload: {
        type: Sequelize.DATE
      },
      dikirim: {
        type: Sequelize.TINYINT
      },
      sudah_baca: {
        type: Sequelize.TINYINT
      },
      estimasi: {
        type: Sequelize.INTEGER
      },
      urut_baca: {
        type: Sequelize.INTEGER
      },
      ket_edit: {
        type: Sequelize.STRING
      },
      memo: {
        type: Sequelize.STRING
      },
      unit_id: {
        type: Sequelize.BIGINT
      },
      rayon_id: {
        type: Sequelize.BIGINT
      },
      jalan_id: {
        type: Sequelize.BIGINT
      },
      video: {
        type: Sequelize.STRING
      },
      tarif_id: {
        type: Sequelize.BIGINT
      },
      verified_at: {
        type: Sequelize.DATE
      },
      request_baca_ulang: {
        type: Sequelize.TINYINT
      },
      verified_by: {
        type: Sequelize.STRING
      },
      kelainan_1bln_lalu: {
        type: Sequelize.STRING
      },
      kelainan_2bln_lalu: {
        type: Sequelize.STRING
      },
      kelainan_3bln_lalu: {
        type: Sequelize.STRING
      },
      stan_angkat: {
        type: Sequelize.INTEGER
      },
      stan_1bln_lalu: {
        type: Sequelize.INTEGER
      },
      stan_2bln_lalu: {
        type: Sequelize.INTEGER
      },
      stan_3bln_lalu: {
        type: Sequelize.INTEGER
      },
      diameter_id: {
        type: Sequelize.BIGINT
      },
      nama_jalan: {
        type: Sequelize.STRING
      },
      nama_rayon: {
        type: Sequelize.STRING
      },
      nama_unit: {
        type: Sequelize.STRING
      },
      kode_golongan: {
        type: Sequelize.STRING
      },
      nama_diameter: {
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
    await queryInterface.dropTable('dumbacameters');
  }
};