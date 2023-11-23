require('dotenv').config();
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = process.env;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);

  if (!token) {
    return res.status(403).json({
      status: 'forbidden',
      message: 'Access token required',
    });
  } else if (token.split(' ')[0].toLowerCase() !== 'bearer') {
    return res.status(403).json({
      status: 'forbidden',
      message: 'Token is not valid',
    });
  }

  jwt.verify(token.split(' ')[1], JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        message: err.message,
      });
    }

    req.user = decoded;
    next();
  });
};