require("dotenv").config();
const express           = require("express");
const path              = require("path");
const cookieParser      = require('cookie-parser');
const logger            = require("morgan");
const port              = process.env.PORT || 3000;

const app = express();

// Middleware configuration
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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