'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('daftarbacameters', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      tahunbln: {
        type: Sequelize.STRING(6),
        defaultValue: null
      },
      namabulan: {
        type: Sequelize.STRING(25),
        defaultValue: null
      },
      jumpelanggan: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      sudahbaca: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      belumbaca: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      jumpakai: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      totalrekening: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      totalkelainan: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      totaltaksir: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      totaladafotorumah: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      tanggaldibuat: {
        type: Sequelize.DATE
      },
      aktif: {
        type: Sequelize.STRING(1),
        defaultValue: '1'
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
    await queryInterface.dropTable('DaftarBacaMeters');
  }
};