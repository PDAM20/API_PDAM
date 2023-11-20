const router      = require('express').Router();
const controller  = require('../controllers/auth.controller');

router.post('/', controller.login);
// router.post('/update-password/:email', controller.changePassword);

module.exports = router;