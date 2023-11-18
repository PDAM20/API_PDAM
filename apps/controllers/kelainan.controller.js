const { Kelainan }       = require('../../models');

module.exports = class kelainanController {
  static async getAll(req, res, next) {
    try {
      const option = {
        attributes: ['id', 'nama']
      }
      const data = await Kelainan.findAll(option)
      
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
      const data = await Kelainan.findOne({
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

  static async createKelainan(req,res, next) {
    try {
      const { nama_kelainan } = req.body;
      
      await Kelainan.create({nama_kelainan})
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

  static async updateKelainan(req,res, next) {
    try {
      const id = req.params.id
      const { nama_kelainan, keterangan, is_taksir } = req.body;
      
      const dt = await Kelainan.findOne({ where: { id: id }})
      if (dt == null) {
        return res.status(404).json({
          success: false,
          message: "data not found"
        })
      }

      await Kelainan.update({nama_kelainan, keterangan, is_taksir}, {
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

      const dt = await Kelainan.findOne({ where: { id: id }})
      if (dt == null) {
        return res.status(404).json({
          success: false,
          message: "data not found"
        })
      }

      await Kelainan.destroy({where: { id: id }})
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