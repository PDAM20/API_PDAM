'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rayons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wilayah_id: {
        type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "wilayahs",
            key: "id",
          }
      },
      kode_rayon: {
        type: Sequelize.STRING
      },
      nama: {
        type: Sequelize.STRING
      },
      aktif: {
        type: Sequelize.TINYINT
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
    await queryInterface.dropTable('rayons');
  }
};