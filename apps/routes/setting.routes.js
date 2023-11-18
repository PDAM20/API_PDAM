const router        = require('express').Router();
const controller    = require('../controllers/setting.controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getDetail);
router.post('/', controller.createSetting);
router.put('/:id', controller.updateSetting);
router.delete('/:id', controller.delete);

module.exports = router;