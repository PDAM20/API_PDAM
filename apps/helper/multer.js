const multer        = require('multer');
const fs            = require('fs');
const path          = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join('public','assets/images');

    // Buat direktori jika belum ada
    fs.mkdir(uploadPath, { recursive: true }, function (err) {
      if (err) {
        console.error('Gagal membuat direktori', err);
      }
      cb(null, uploadPath);
    });
  },

  filename: (req, file, cb) => {
    const index = file.originalname.split('.').length;
    console.log(file.originalname);
    cb(null, Date.now() + '.' + file.originalname.split('.')[index - 1]);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: "1MB"
  },
  fileFilter: (req, file, cb) => {
    if ( file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'video/mp4' ){
      return cb(null, true);
    } 
    else {
      return cb("Invalid file format. Only PDF files are allowed.", false);
    }
  },
});

module.exports = upload;