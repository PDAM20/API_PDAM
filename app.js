require("dotenv").config();
const express           = require("express");
const path              = require("path");
const cookieParser      = require('cookie-parser');
const logger            = require("morgan");
const port              = process.env.PORT || 3000;

const AuthRouter        = require('./apps/routes/auth.routes');
const PelangganRouter   = require('./apps/routes/pelanggan.routes');
const KelainanRouter    = require('./apps/routes/kelainan.routes');
const MateraiRouter     = require('./apps/routes/materai.routes');
const SettingRouter     = require('./apps/routes/setting.routes');
const SK_TarifRouter    = require('./apps/routes/sktarif.routes');
const GolonganRouter    = require('./apps/routes/golongan.routes');
const TarifRouter       = require('./apps/routes/tarif.routes');
const WilayahRouter     = require('./apps/routes/wilayah.routes');

const app = express();

// Middleware configuration
app.use(logger('dev'));
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Register routes
app.use('/v1/login', AuthRouter);
app.use('/v1/pelanggan', PelangganRouter);
app.use('/v1/kelainan', KelainanRouter);
app.use('/v1/materai', MateraiRouter);
app.use('/v1/setting', SettingRouter);
app.use('/v1/sk-tarif', SK_TarifRouter);
app.use('/v1/golongan', GolonganRouter);
app.use('/v1/tarif', TarifRouter);
app.use('/v1/wilayah', WilayahRouter);

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