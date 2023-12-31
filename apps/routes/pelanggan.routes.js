const router        = require('express').Router();
const controller    = require('../controllers/pelanggan.controller');
const verifyToken   = require('../middlewares/verifyToken');

router.get('/petugas', verifyToken, controller.getAllByPetugas);
router.get('/', controller.getAll);
router.get('/:id', controller.getDetail);
router.post('/', controller.createPelanggan);
router.put('/:id', controller.updatePelanggan);
router.delete('/:id', controller.delete);

module.exports = router;