const { daftarbacameter }       = require('../../models');

module.exports = class DaftarbacameterController {
  static async getAll(req, res, next) {
    try {
      const data = await daftarbacameter.findAll()
      
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
      const tahunbln = req.params.tahunbln;
      const data = await daftarbacameter.findOne({
        where: {
          tahunbln: tahunbln
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

  static async createSk_tarif(req,res, next) {
    try {
      const { tahun, no_sk, aktif } = req.body;
      
      await daftarbacameter.create({tahun, no_sk, aktif})
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

  static async updateSk_tarif(req,res, next) {
    try {
      const id = req.params.id
      const { tahun, no_sk, aktif } = req.body;
      
      const dt = await daftarbacameter.findOne({ where: { id: id }})
      if (dt == null) {
        return res.status(404).json({
          success: false,
          message: "data not found"
        })
      }

      await daftarbacameter.update({tahun, no_sk, aktif}, {
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

      const dt = await daftarbacameter.findOne({ where: { id: id }})
      if (dt == null) {
        return res.status(404).json({
          success: false,
          message: "data not found"
        })
      }

      await daftarbacameter.destroy({where: { id: id }})
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