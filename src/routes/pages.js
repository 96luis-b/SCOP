const express = require('express');
const router = express.Router();
//const path = require('path');

const home = router.get('/',(req, res) => {
    res.render('index');
})

const login = router.get('/login',(req, res) => {
    res.render('login');
})

const dashboard = router.get('/dashboard',(req, res) => {
    res.render('dashboard');
})

  module.exports = {
                    home, 
                    login,
                    dashboard  
                    };