const router        = require('express').Router();
const controller    = require('../controllers/materai.controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getDetail);
router.post('/', controller.createMaterai);
router.put('/:id', controller.updateMaterai);
router.delete('/:id', controller.delete);

module.exports = router;