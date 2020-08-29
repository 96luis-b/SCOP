const express = require('express');
const router = express.Router();
const path = require('path');

const { home, login, dashboard } = require('./pages')

router.get('/', home)
router.get('/login', login)
router.get('/dashboard', dashboard)

module.exports = router;