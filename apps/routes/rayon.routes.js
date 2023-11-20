const router        = require('express').Router();
const controller    = require('../controllers/rayon.controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getDetail);
router.post('/', controller.create);
router.put('/:id', controller.create);
router.delete('/:id', controller.delete);

module.exports = router;