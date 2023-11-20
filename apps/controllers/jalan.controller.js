const { jalan }       = require('../../models');

module.exports = class WilayahController {
  static async getAll(req, res, next) {
    try {
      const data = await jalan.findAll()
      
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
      const data = await jalan.findOne({
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
      const { nama, aktif } = req.body;
      
      await jalan.create({nama, aktif})
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
      const { nama, aktif } = req.body;
      
      const dt = await jalan.findOne({ where: { id: id }})
      if (dt == null) {
        return res.status(404).json({
          success: false,
          message: "data not found"
        })
      }

      await jalan.update({nama, aktif}, {
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

      const dt = await jalan.findOne({ where: { id: id }})
      if (dt == null) {
        return res.status(404).json({
          success: false,
          message: "data not found"
        })
      }

      await jalan.destroy({where: { id: id }})
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