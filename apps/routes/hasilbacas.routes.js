const router        = require('express').Router();
const controller    = require('../controllers/hasilbaca.controller');
const verifyToken   = require('../middlewares/verifyToken');

router.get('/petugas/:tahunbln', verifyToken, controller.getAllByPetugas);
router.get('/bacaulang/:tahunbln', verifyToken, controller.getAllByPetugasBacaUlang);
router.get('/detail-konfirmasi/:tahunbln/:rayon_id', verifyToken, controller.getDetailKonformasi);
router.get('/detail-konfirmasi-bculang/:tahunbln/:rayon_id', verifyToken, controller.getDetailKonformasiBacaUlang);
router.get('/', controller.getAll);
router.get('/:id', controller.getDetail);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;