const express = require('express');
const router = express.Router();
const path = require('path');

const { getUsers, createUser } = require('../controllers/index.controller')

router.get('/users', getUsers) // endpoint para consulta a la DB
router.post('/users', createUser) // endpoint para insercion a la DB


module.exports = router;