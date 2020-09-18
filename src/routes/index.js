const { Router } = require('express');
const router = Router()

router.get('/', (req, res) =>{
    res.render('index')
})

router.post('/register', (req, res) =>{
    console.log(req.body)
    // req.session.my_variable = 'hello world'  // para añadir un dato a session
    req.flash('success', 'now your are registered')

    // res.send('received')
    res.redirect('./profile')
})

router.get('/profile', (req, res) =>{
    console.log(req.session.my_variable)
    res.render('profile')
})

module.exports = router;