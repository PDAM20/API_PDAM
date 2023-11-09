require("dotenv").config();
const express           = require("express");
const path              = require("path");
const cookieParser      = require('cookie-parser');
const logger            = require("morgan");
const port              = process.env.PORT || 3000;

const AuthRouter        = require('./apps/routes/auth.routes');
const PelangganRouter   = require('./apps/routes/pelanggan.routes');
const KelainanRouter    = require('./apps/routes/kelainan.routes');

const app = express();

// Middleware configuration
app.use(logger('dev'));
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Register routes
app.use('/v1/auth', AuthRouter);
app.use('/v1/pelanggan', PelangganRouter);
app.use('/v1/kelainan', KelainanRouter);

app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    message: 'url not found'
  });
  next()
})

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});