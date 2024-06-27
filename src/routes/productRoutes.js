const express = require('express')
const router = express.Router();
const controller = require('../controllers/prodController');

router.post('/create',controller.createProd);
router.get('/fetch',controller.getAllProd);
router.get('/fetch/:prodId',controller.prodDetails);

module.exports = router;