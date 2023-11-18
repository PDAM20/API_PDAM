const { setting }       = require('../../models');

module.exports = class SettingController {
  static async getAll(req, res, next) {
    try {
      // const option = {
      //   attributes: ['id', 'min', 'max', 'by_Setting']
      // }
      const data = await setting.findAll()
      
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
      const data = await setting.findOne({
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

  static async createSetting(req,res, next) {
    try {
      const { lokalpathftp, lokalfolderfoto, remotefolderfoto, virtualdirfoto, alamatwebinfo, flagstaticmap, folderbackup, bolehbc2step, bolehbcbarcode, bolehbclastdigit, bolehbcdatabase, strictbcbylatlong, strictbcgps, rutebyrayon } = req.body;
      
      await setting.create({lokalpathftp, lokalfolderfoto, remotefolderfoto, virtualdirfoto, alamatwebinfo, flagstaticmap, folderbackup, bolehbc2step, bolehbcbarcode, bolehbclastdigit, bolehbcdatabase, strictbcbylatlong, strictbcgps, rutebyrayon})
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

  static async updateSetting(req,res, next) {
    try {
      const id = req.params.id
      const { lokalpathftp, lokalfolderfoto, remotefolderfoto, virtualdirfoto, alamatwebinfo, flagstaticmap, folderbackup, bolehbc2step, bolehbcbarcode, bolehbclastdigit, bolehbcdatabase, strictbcbylatlong, strictbcgps, rutebyrayon } = req.body;
      
      const dt = await setting.findOne({ where: { id: id }})
      if (dt == null) {
        return res.status(404).json({
          success: false,
          message: "data not found"
        })
      }

      await setting.update({lokalpathftp, lokalfolderfoto, remotefolderfoto, virtualdirfoto, alamatwebinfo, flagstaticmap, folderbackup, bolehbc2step, bolehbcbarcode, bolehbclastdigit, bolehbcdatabase, strictbcbylatlong, strictbcgps, rutebyrayon}, {
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

      const dt = await setting.findOne({ where: { id: id }})
      if (dt == null) {
        return res.status(404).json({
          success: false,
          message: "data not found"
        })
      }

      await setting.destroy({where: { id: id }})
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