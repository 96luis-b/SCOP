const express = require('express');
const router = express.Router();


    //paginas
const { homePage, loginPage, dashboardPage, insertData, report } = require('./pages')

router.get('/', homePage)
router.get('/login', loginPage)
router.get('/dashboard', dashboardPage)
router.get('/insertData', insertData)
router.get('/report', report)

    //peticiones a base de datos
const { getUsers, createUser, insertNewValue, login, getOper } = require('../controllers/index.controller')

router.post('/login', login) // endpoint para consulta a la DB
router.post('/users', createUser) // endpoint para insercion a la DB
router.post('/insertNewValue', insertNewValue) // endpoint para insercion a la DB
router.post('/getOper', getOper) // endpoint para insercion a la DB

module.exports = router;