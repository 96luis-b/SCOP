const express = require('express');
const app = express();
const path = require('path')


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))


// static files
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, 'public/img')));
app.use(express.static(path.join(__dirname, 'public/libs')));
//app.use(express.static(path.join(__dirname, 'public/views')));
app.use(express.static(path.join(__dirname, 'public')));

//setting
app.set('port', 3000);
app.set('views', path.join(__dirname,'/views'))
app.set('view engine', 'ejs');

//routes
app.use(require('./routes/index'))

//listening the server
app.listen(app.get('port'))
console.log('Server on port 3000');