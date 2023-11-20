const { rayon, wilayah }       = require('../../models');

module.exports = class RayonController {
  static async getAll(req, res, next) {
    try {
      const data = await rayon.findAll({
        include: [{
          model: wilayah,
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
      const data = await rayon.findOne({
        where: {
          id: id
        }, 
        include: [{
          model: wilayah,
          attributes: ['nama']
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
      const { nama } = req.body;
      
      await wilayah.create({nama})
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
      const { nama } = req.body;
      
      const dt = await wilayah.findOne({ where: { id: id }})
      if (dt == null) {
        return res.status(404).json({
          success: false,
          message: "data not found"
        })
      }

      await wilayah.update({nama}, {
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

      const dt = await wilayah.findOne({ where: { id: id }})
      if (dt == null) {
        return res.status(404).json({
          success: false,
          message: "data not found"
        })
      }

      await wilayah.destroy({where: { id: id }})
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