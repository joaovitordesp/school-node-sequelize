const {Router} = require('express');
const TurmaController = require('../controllers/TurmaController.js');

const router = Router();

router.get('/turmas' , TurmaController.pegaTodasAsTurmas);
router.get('/turmas/:id', TurmaController.pegaUmaTurma);
router.post('/turmas', TurmaController.turmaCriada);
router.put('/turmas/:id', TurmaController.atualizaTurma);
router.delete('/turmas/:id', TurmaController.deletaTurma);

module.exports = router;