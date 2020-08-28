const express = require('express');
const router = express.Router();
const path = require('path');

//const { getUsers, createUser } = require('../controllers/index.controller')

//router.get('/users', getUsers) // endpoint para consulta a la DB
//router.post('/users', createUser) // endpoint para insercion a la DB

router.get('/', (req, res)=>{
    //res.render('index', {});  // se utiliza para renderizar el archivo del motor de plantillas y procesar codigo
   
    res.render('index.html');
});
router.get('/contact', (req, res)=>{
    res.render('contact', { title:'Contact Page'});  // se utiliza para renderizar el archivo del motor de plantillas y procesar codigo

});

module.exports = router;