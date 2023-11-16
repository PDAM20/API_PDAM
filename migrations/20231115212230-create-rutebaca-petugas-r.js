'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rutebaca_petugas_rs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      petugas_id: {
        type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "petugasbacas",
            key: "id",
          }
      },
      rayon_id: {
        type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "rayons",
            key: "id",
          }
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
    await queryInterface.dropTable('rutebaca_petugas_rs');
  }
};