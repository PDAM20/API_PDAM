'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('settings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lokalpathftp: {
        type: Sequelize.STRING
      },
      lokalfolderfoto: {
        type: Sequelize.STRING
      },
      remotefolderfoto: {
        type: Sequelize.STRING
      },
      virtualdirfoto: {
        type: Sequelize.STRING
      },
      alamatwebinfo: {
        type: Sequelize.STRING
      },
      flagstaticmap: {
        type: Sequelize.STRING
      },
      folderbackup: {
        type: Sequelize.STRING
      },
      bolehbc2step: {
        type: Sequelize.TINYINT
      },
      bolehbcbarcode: {
        type: Sequelize.TINYINT
      },
      bolehbclastdigit: {
        type: Sequelize.TINYINT
      },
      bolehbcdatabase: {
        type: Sequelize.TINYINT
      },
      strictbcbylatlong: {
        type: Sequelize.TINYINT
      },
      strictbcgps: {
        type: Sequelize.TINYINT
      },
      rutebyrayon: {
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
    await queryInterface.dropTable('settings');
  }
};