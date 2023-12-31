const { sequelize, hasilbaca } = require('../../models');

module.exports = class PelangganController {
  static async getAllByPetugas(req, res, next) {
    try {
      const Petugas = req.user.id;
      const Periode = req.params.tahunbln;
      const [results, _] = await sequelize.query(`SELECT a.rayon_id, hasilbacas.kode_rayon, COUNT(hasilbacas.no_pelanggan) AS jml_pelanggan
      FROM rutebaca_petugas_rs a
      LEFT JOIN hasilbacas ON a.rayon_id = hasilbacas.rayon_id
      WHERE a.petugas_id = ${Petugas} AND hasilbacas.periode=${Periode} AND hasilbacas.flagaktif=0 AND hasilbacas.sudahbaca=FALSE AND hasilbacas.flagreq_bc_ulang=0 AND hasilbacas.verifikasi=FALSE
      GROUP BY a.rayon_id, hasilbacas.kode_rayon;`);
      
      return res.status(200).json({
        success: true,
        message: "success get all data",
        total: results.length,
        data: results
      });
      
    } catch (error) {
      res.json(error.message);
      next(error);
    }
  } 

  static async getAllByPetugasBacaUlang(req, res, next) {
    try {
      const Petugas = req.user.id;
      const Periode = req.params.tahunbln;
      const [results, _] = await sequelize.query(`SELECT a.rayon_id, hasilbacas.kode_rayon, COUNT(hasilbacas.no_pelanggan) AS jml_pelanggan
      FROM rutebaca_petugas_rs a
      LEFT JOIN hasilbacas ON a.rayon_id = hasilbacas.rayon_id
      WHERE a.petugas_id = ${Petugas} AND hasilbacas.periode=${Periode} AND hasilbacas.flagaktif=0 AND hasilbacas.sudahbaca=TRUE AND hasilbacas.flagreq_bc_ulang=1 AND hasilbacas.verifikasi=FALSE
      GROUP BY a.rayon_id, hasilbacas.kode_rayon;`);
      
      return res.status(200).json({
        success: true,
        message: "success get all data",
        total: results.length,
        data: results
      });
      
    } catch (error) {
      res.json(error.message);
      next(error);
    }
  } 

  static async getDetailKonformasi(req, res, next) {
    try {
      const Periode = req.params.tahunbln;
      const rayon_id = req.params.rayon_id;

      const [results, _] = await sequelize.query(`SELECT * FROM hasilbacas
      WHERE periode = ${Periode} AND flagaktif = 0 AND sudahbaca = FALSE 
      AND flagreq_bc_ulang = 0 AND verifikasi = FALSE AND rayon_id = ${rayon_id}`);

      return res.status(200).json({
        success: true,
        message: "success get all data",
        total: results.length,
        data: results
      });
      
    } catch (error) {
      res.json(error.message);
      next(error);
    }
  } 

  static async getDetailKonformasiBacaUlang(req, res, next) {
    try {
      const Periode = req.params.tahunbln;
      const rayon_id = req.params.rayon_id;

      const [results, _] = await sequelize.query(`SELECT * FROM hasilbacas
      WHERE periode = ${Periode} AND flagaktif = 0 AND sudahbaca = TRUE 
      AND flagreq_bc_ulang = 1 AND verifikasi = FALSE AND rayon_id = ${rayon_id}`);

      return res.status(200).json({
        success: true,
        message: "success get all data",
        total: results.length,
        data: results
      });
      
    } catch (error) {
      res.json(error.message);
      next(error);
    }
  } 


  static async getAll(req, res, next) {
    try {
      let { page, limit } = req.query;
  
      page = parseInt(page) || 1;
      limit = parseInt(limit) || 10; 
  
      const offset = (page - 1) * limit;
  
      const data = await hasilbaca.findAll({
        attributes: ['id', 'nama', 'no_pelanggan', 'alamat'],
        offset: offset,
        limit: limit
      });
  
      return res.status(200).json({
        success: true,
        message: "success get all data",
        total : data.length,
        data: data
      });
    } catch (error) {
      res.json(error.message);
      next(error);
    }
  }  

  static async getDetail(req, res, next) {
    try {
      const id = req.params.id;
      const data = await hasilbaca.findOne({
        where: {
          id: id
        }})

      if (!data) {
        return res.status(404).json({
          success: false,
          message: "data not found"
        })
      }
      
      return res.status(200).json({
        success: true,
        message: "success get detail",
        data: data
      })
    } catch (error) {
      res.json(error.message);
      next(error)
    }
  }

  static async create(req,res, next) {
    try {
      const { status, no_pelanggan, no_lama, no_kartu, nama, alamat, tmp_lahir, tgl_lahir, no_ktp, no_kk, no_telp, no_hp, email, pekerjaan, jumlah_penghuni, jenis_bangunan, kepemilikan, nama_pemilik, merek_id, no_meter, golongan_id, wilayah_id, rayon_id, jalan_id, diameter_id, kec_id, kel_id, latitude, longitude, tgl_pasif, tgl_pasang, tgl_aktif, mbr, urutanbaca } = req.body;

      await hasilbaca.create({status, no_pelanggan, no_lama, no_kartu, nama, alamat, tmp_lahir, tgl_lahir, no_ktp, no_kk, no_telp, no_hp, email, pekerjaan, jumlah_penghuni, jenis_bangunan, kepemilikan, nama_pemilik, merek_id, no_meter, golongan_id, wilayah_id, rayon_id, jalan_id, diameter_id, kec_id, kel_id, latitude, longitude, tgl_pasif, tgl_pasang, tgl_aktif, mbr, urutanbaca})
      return res.status(200).json({
        success: true,
        message: "succcess create"
      })
    } catch (error) {
      res.json(error.message);
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const id = req.params.id;
      const { status, no_pelanggan, no_lama, no_kartu, nama, alamat, tmp_lahir, tgl_lahir, no_ktp, no_kk, no_telp, no_hp, email, pekerjaan, jumlah_penghuni, jenis_bangunan, kepemilikan, nama_pemilik, merek_id, no_meter, golongan_id, wilayah_id, rayon_id, jalan_id, diameter_id, kec_id, kel_id, latitude, longitude, tgl_pasif, tgl_pasang, tgl_aktif, mbr, urutanbaca } = req.body;
      
      const dt = await hasilbaca.findOne({ where: { id: id } });
      if (dt == null) {
        return res.status(404).json({
          success: false,
          message: "data not found"
        });
      }
      
      await hasilbaca.update({status, no_pelanggan, no_lama, no_kartu, nama, alamat, tmp_lahir, tgl_lahir, no_ktp, no_kk, no_telp, no_hp, email, pekerjaan, jumlah_penghuni, jenis_bangunan, kepemilikan, nama_pemilik, merek_id, no_meter, golongan_id, wilayah_id, rayon_id, jalan_id, diameter_id, kec_id, kel_id, latitude, longitude, tgl_pasif, tgl_pasang, tgl_aktif, mbr, urutanbaca}, {
        where: {
          id: id
        }})

      return res.status(200).json({
        success: true,
        message: "success update"
      });
    } catch (error) {
      console.error(error.message);
      next(error); 
    }
  }
  
  static async delete(req, res, next) {
    try {
      const id = req.params.id;

      const dt = await hasilbaca.findOne({ where: { id: id }})
      if (dt == null) {
        return res.status(404).json({
          success: false,
          message: "data not found"
        })
      }

      await hasilbaca.destroy({where: { id: id }})
      return res.status(200).json({
        success: true,
        message: "success delete"
      })
    } catch (error) {
      res.json(error.message);
      next(error)
    }
  }
}