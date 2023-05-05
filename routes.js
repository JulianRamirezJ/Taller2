const express = require('express');
const PokeneaController = require('./controllers/PokeneaController');

const router = express.Router();

router.get('/pokenea', PokeneaController.getPokeneaAleatorio);
router.get('/pokenea-imagen', PokeneaController.getImagenPokeneaAleatorio);

module.exports = router;
