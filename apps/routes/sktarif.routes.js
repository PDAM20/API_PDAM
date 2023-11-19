const router        = require('express').Router();
const controller    = require('../controllers/sktarif.controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getDetail);
router.post('/', controller.createSk_tarif);
router.put('/:id', controller.updateSk_tarif);
router.delete('/:id', controller.delete);

module.exports = router;