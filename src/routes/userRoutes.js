const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');

router.post('/create', controller.createUser);
router.get('/fetch', controller.getAllUsers);
router.get('/fetch/:userId', controller.userDetail);

router.get('/', controller.userDetail);


module.exports = router;