const express = require('express');
const router = express.Router();


    //paginas
const { homePage, loginPage, dashboardPage } = require('./pages')

router.get('/', homePage)
router.get('/login', loginPage)
router.get('/dashboard', dashboardPage)

    //peticiones a base de datos
const { getUsers, createUser, insertNewValue, login } = require('../controllers/index.controller')

router.post('/login', login) // endpoint para consulta a la DB
router.post('/users', createUser) // endpoint para insercion a la DB
router.post('/insertNewValue', insertNewValue) // endpoint para insercion a la DB

module.exports = router;