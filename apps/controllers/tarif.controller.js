const { tarif, golongan }       = require('../../models');

module.exports = class TarifController {
  static async getAll(req, res, next) {
    try {
      const data = await tarif.findAll({
        include: [{
          model: golongan,
          attributes: ['kode_golongan', 'nama', 'kode_akun']
        }]
      })
      
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
      const data = await tarif.findOne({
        where: {
          id: id
        }, 
        include: [{
          model: golongan,
          attributes: ['kode_golongan', 'nama', 'kode_akun']
        }]})

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
      const { golongan_id, min, max, harga, istetap } = req.body;
      
      await tarif.create({golongan_id, min, max, harga, istetap})
      .catch((err) => {
        return res.status(400).json({
          success: false,
          message: err.message
        })
      })

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
      const { golongan_id, min, max, harga, istetap } = req.body;
      
      const dt = await tarif.findOne({ where: { id: id }})
      if (dt == null) {
        return res.status(404).json({
          success: false,
          message: "data not found"
        })
      }

      await tarif.update({golongan_id, min, max, harga, istetap}, {
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

      const dt = await tarif.findOne({ where: { id: id }})
      if (dt == null) {
        return res.status(404).json({
          success: false,
          message: "data not found"
        })
      }

      await tarif.destroy({where: { id: id }})
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