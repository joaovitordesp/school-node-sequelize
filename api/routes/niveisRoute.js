const {Router} = require('express');
const NivelController = require('../controllers/NivelController.js');

const router = Router();

router.get('/nivel' , NivelController.pegaTodosOsNiveis);
router.get('/nivel/:id', NivelController.pegaUmNivel);
router.post('/nivel', NivelController.pessoaCriada);
router.put('/nivel/:id', NivelController.atualizaNiveis);
router.delete('/nivel/:id', NivelController.deletaNivel);

module.exports = router;