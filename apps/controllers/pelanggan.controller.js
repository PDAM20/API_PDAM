const { tb_pelanggan, tb_kelainan }     = require('../../models');
const multer = require('multer');
const upload = require('../helper/multer').fields([
  { name: 'gambar_meter', maxCount: 1 },
  { name: 'gambar_rumah', maxCount: 1 },
  { name: 'video_meter', maxCount: 1 },
]);

module.exports = class PelangganController {
  static async getAll(req, res, next) {
    try {
      const option = {
        attributes: ['id', 'kode_pelanggan', 'nama', 'rayon'],
        include : [
          {
            model: tb_kelainan,
            attributes: ['nama_kelainan']
          }
        ]
      }
      const data = await tb_pelanggan.findAll(option)
      
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
      const data = await tb_pelanggan.findOne({
        where: {
          id: id
        }, 
        include : [
          {
            model: tb_kelainan,
            attributes: ['nama_kelainan']
          }
        ]})

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

  static async createPelanggan(req,res, next) {
    try {
      const { kode_pelanggan, nama, alamat, air_sl, air_habis, rayon } = req.body;
      
      await tb_pelanggan.create({kode_pelanggan, nama, alamat, air_sl, air_habis, rayon})
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

  static async updatePelanggan(req, res, next) {
    upload(req, res, async function (err) {
      try {
        const id = req.params.id;
        const { id_kelainan } = req.body;
        
        if (err instanceof multer.MulterError) {
          // A Multer error occurred when uploading.
          return res.status(422).json({
            success: false,
            message: err.message
          })
        } else if (err) {
          // An unknown error occurred when uploading.
          return res.status(422).json({
            success: false,
            message: err.message
          })
        }
        
        
        const dt = await tb_pelanggan.findOne({ where: { id: id } });
        if (dt == null) {
          return res.status(404).json({
            success: false,
            message: "data not found"
          });
        }
        
        const data = await tb_kelainan.findOne({ where: { id: id_kelainan }})
        if (data == null) {
          return res.status(404).json({
            success: false,
            message: `kelainan with id ${id_kelainan} is empty`
          })
        }
        
        let urls = req.files
        for (const url in urls) {
          let urlTmp = urls[url][0].path.split('\\')
          urlTmp.shift()
          dt[url] = urlTmp.join('/')
          await dt.save();
        }
        
        return res.status(200).json({
          success: true,
          message: "success update"
        });
      } catch (error) {
        console.error(error.message);
        next(error); 
      }
  
      // Everything went fine.
    })
  }
  

  static async delete(req, res, next) {
    try {
      const id = req.params.id;

      const dt = await tb_pelanggan.findOne({ where: { id: id }})
      if (dt == null) {
        return res.status(404).json({
          success: false,
          message: "data not found"
        })
      }

      await tb_pelanggan.destroy({where: { id: id }})
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