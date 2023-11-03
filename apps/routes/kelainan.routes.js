const router        = require('express').Router();
const controller    = require('../controller/kelainan.controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getDetail);
router.post('/', controller.createKelainan);
router.put('/:id', controller.updateKelainan);
router.delete('/:id', controller.delete);

module.exports = router;