const express = require('express');
const router = express.Router();
//const path = require('path');

const homePage = router.get('/',(req, res) => {
    res.render('index');
})

const loginPage = router.get('/login',(req, res) => {
    res.render('login');
})

const dashboardPage = router.get('/dashboard',(req, res) => {
    res.render('dashboard');
})

  module.exports = {
                    homePage, 
                    loginPage,
                    dashboardPage  
                    };