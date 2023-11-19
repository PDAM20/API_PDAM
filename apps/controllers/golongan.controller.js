const { golongan, sktarif }       = require('../../models');

module.exports = class GolonganController {
  static async getAll(req, res, next) {
    try {
      const data = await golongan.findAll()
      
      return res.status(200).json({
        success: true,
        message: "success get all data",
        data: data
      })
    } catch (error) {
      res.json(error.message);
      next(error)
    }
  }

  static async getDetail(req, res, next) {
    try {
      const id = req.params.id;
      const data = await golongan.findOne({
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
      const { kode_golongan, nama, kode_akun, administrasi, pemeliharaan, denda1, persendenda1, denda2, denda3, minpakai, idsktarif, retribusi, pelayanan } = req.body;
      
      const data = await sktarif.findOne({
        where: {
          id: idsktarif
        }})

      if (!data) {
        return res.status(404).json({
          success: false,
          message: `Sk tarif with id ${idsktarif} is empty`
        })
      }

      await golongan.create({kode_golongan, nama, kode_akun, administrasi, pemeliharaan, denda1, persendenda1, denda2, denda3, minpakai, idsktarif, retribusi, pelayanan})
      return res.status(200).json({
        success: true,
        message: "succcess create"
      })
    } catch (error) {
      res.json(error.message);
      next(error);
    }
  }

  static async update(req,res, next) {
    try {
      const id = req.params.id
      const { kode_golongan, nama, kode_akun, administrasi, pemeliharaan, denda1, persendenda1, denda2, denda3, minpakai, idsktarif, retribusi, pelayanan } = req.body;
      
      const dt = await golongan.findOne({ where: { id: id }})
      if (dt == null) {
        return res.status(404).json({
          success: false,
          message: "data not found"
        })
      }

      await golongan.update({kode_golongan, nama, kode_akun, administrasi, pemeliharaan, denda1, persendenda1, denda2, denda3, minpakai, idsktarif, retribusi, pelayanan}, {
        where: {
          id: id
        }})

      return res.status(200).json({
        success: true,
        message: "succcess update"
      })
    } catch (error) {
      res.json(error.message);
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const id = req.params.id;

      const dt = await golongan.findOne({ where: { id: id }})
      if (dt == null) {
        return res.status(404).json({
          success: false,
          message: "data not found"
        })
      }

      await golongan.destroy({where: { id: id }})
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