'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userakses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      tgllahir: {
        type: Sequelize.DATE
      },
      telpon: {
        type: Sequelize.STRING
      },
      mulaikerja: {
        type: Sequelize.DATE
      },
      foto: {
        type: Sequelize.STRING
      },
      idjabatan: {
        type: Sequelize.INTEGER
      },
      namauser: {
        type: Sequelize.STRING
      },
      passworduser: {
        type: Sequelize.STRING
      },
      keterangan: {
        type: Sequelize.STRING
      },
      aktif: {
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
    await queryInterface.dropTable('userakses');
  }
};