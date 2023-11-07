'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_pelanggans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_kelainan: {
        type: Sequelize.INTEGER,
        references: {
          model: "tb_kelainans",
          key: "id",
        }
      },
      kode_pelanggan: {
        type: Sequelize.STRING
      },
      nama: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.TEXT
      },
      gambar_meter: {
        type: Sequelize.STRING
      },
      gambar_rumah: {
        type: Sequelize.STRING
      },
      video_meter: {
        type: Sequelize.STRING
      },
      air_sl: {
        type: Sequelize.INTEGER
      },
      air_habis: {
        type: Sequelize.INTEGER
      },
      rayon: {
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
    await queryInterface.dropTable('tb_pelanggans');
  }
};