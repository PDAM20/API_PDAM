const { kelurahan, kecamatan }       = require('../../models');

module.exports = class KelurahanController {
  static async getAll(req, res, next) {
    try {
      const data = await kelurahan.findAll({
        include: [{
          model: kecamatan,
          attributes: ['nama']
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
      const data = await kelurahan.findOne({
        where: {
          id: id
        }, 
        include: [{
          model: kecamatan,
          attributes: ['nama']
        }]
      })

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
      const { kec_id, nama } = req.body;
      
      await kelurahan.create({kec_id, nama})
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
      const { kec_id, nama } = req.body;
      
      const dt = await kelurahan.findOne({ where: { id: id }})
      if (dt == null) {
        return res.status(404).json({
          success: false,
          message: "data not found"
        })
      }

      await kelurahan.update({kec_id, nama}, {
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

      const dt = await kelurahan.findOne({ where: { id: id }})
      if (dt == null) {
        return res.status(404).json({
          success: false,
          message: "data not found"
        })
      }

      await kelurahan.destroy({where: { id: id }})
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