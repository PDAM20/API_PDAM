'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('golongans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kode_golongan: {
        type: Sequelize.STRING
      },
      nama: {
        type: Sequelize.STRING
      },
      kode_akun: {
        type: Sequelize.STRING
      },
      administrasi: {
        type: Sequelize.INTEGER
      },
      pemeliharaan: {
        type: Sequelize.INTEGER
      },
      denda1: {
        type: Sequelize.INTEGER
      },
      persendenda1: {
        type: Sequelize.SMALLINT
      },
      denda2: {
        type: Sequelize.INTEGER
      },
      denda3: {
        type: Sequelize.INTEGER
      },
      minpakai: {
        type: Sequelize.SMALLINT
      },
      idsktarif: {
        type: Sequelize.TINYINT,
          allowNull: false,
          references: {
            model: "sktarifs",
            key: "id",
          }
      },
      retribusi: {
        type: Sequelize.INTEGER
      },
      pelayanan: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('golongans');
  }
};