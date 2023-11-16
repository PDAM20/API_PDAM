'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pelanggans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.TINYINT
      },
      no_pelanggan: {
        type: Sequelize.STRING
      },
      no_lama: {
        type: Sequelize.STRING
      },
      no_kartu: {
        type: Sequelize.STRING
      },
      nama: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      tmp_lahir: {
        type: Sequelize.STRING
      },
      tgl_lahir: {
        type: Sequelize.DATE
      },
      no_ktp: {
        type: Sequelize.STRING
      },
      no_kk: {
        type: Sequelize.STRING
      },
      no_telp: {
        type: Sequelize.STRING
      },
      no_hp: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      pekerjaan: {
        type: Sequelize.STRING
      },
      jumlah_penghuni: {
        type: Sequelize.INTEGER
      },
      jenis_bangunan: {
        type: Sequelize.STRING
      },
      kepemilikan: {
        type: Sequelize.STRING
      },
      nama_pemilik: {
        type: Sequelize.STRING
      },
      merek_id: {
        type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "merek_meters",
            key: "id",
          }
      },
      no_meter: {
        type: Sequelize.STRING
      },
      golongan_id: {
        type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "golongans",
            key: "id",
          }
      },
      wilayah_id: {
        type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "wilayahs",
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
      jalan_id: {
        type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "jalans",
            key: "id",
          }
      },
      diameter_id: {
        type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "diameters",
            key: "id",
          }
      },
      kec_id: {
        type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "kecamatans",
            key: "id",
          }
      },
      kel_id: {
        type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "kelurahans",
            key: "id",
          }
      },
      latitude: {
        type: Sequelize.STRING
      },
      longitude: {
        type: Sequelize.STRING
      },
      tgl_pasif: {
        type: Sequelize.DATE
      },
      tgl_pasang: {
        type: Sequelize.DATE
      },
      tgl_aktif: {
        type: Sequelize.DATE
      },
      mbr: {
        type: Sequelize.TINYINT
      },
      urutanbaca: {
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
    await queryInterface.dropTable('pelanggans');
  }
};