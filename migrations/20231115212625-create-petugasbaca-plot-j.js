'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('petugasbaca_plot_js', {
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
      jalan_id: {
        type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "jalans",
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
    await queryInterface.dropTable('petugasbaca_plot_js');
  }
};