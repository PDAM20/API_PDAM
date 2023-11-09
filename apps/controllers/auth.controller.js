const { tb_petugas }      = require('../../models');
const bcrypt              = require('bcrypt');
const jwt                 = require('jsonwebtoken');

module.exports = class AuthController {

  static async login(req, res, next) {
    try {
      const {username, password} = req.body;

      const User = await tb_petugas.findOne({where: { username }});
      // Cek user di database
      if (User == null) {
        return res.status(404).json({
          success: true,
          message: "user not found"
        })
      } else {
        const payload = {
          id: User.id,
          nama: User.nama,
          alamat: User.alamat,
          status: User.status
        }
        
        // Cek password di database
        bcrypt.compare(password, User.password, async (err, passed) => {
          if (passed) {
            let token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
              expiresIn: '1d'
            })
            return res.json({
              success: true,
              token: token
            })
          } else {
            return res.status(403).json({
              success: false,
              message: 'username or password is wrong'
            });
          }
        })
      }
    } catch (error) {
      console.log(error.message);
      next(error)
    }
  }


  static async changePassword(req, res, next) {
    try {
      const { password } = req.body;
      const { email } = req.params;

      const data = await user.findOne({ email: email });
      if (!data) {
        return res.status(404).json({
          success: false,
          message: "user not found"
        })
      }
      const hash = await bcrypt.hash(password, 10);
      await user.update({ password: hash}, {
        where: {
          email: email
        }
      })

      return res.status(200).json({
        success: true,
        message: 'Seccess update password'
      })
    } catch (error) {
      next(error);
    }
  }
}