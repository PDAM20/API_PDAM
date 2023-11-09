'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
      const hash = await bcrypt.hash('budi123', 10);
      await queryInterface.bulkInsert('tb_petugas', [{
        nama: 'BUDI SANTOSO',
        alamat: 'BHAYAM WURUK NO 5 KOTA PROBOLINGGO',
        no_telp: '082333529181',
        username: 'budi',
        password: hash,
        status: 'aktif',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tb_petugas', null, {});
  }
};
