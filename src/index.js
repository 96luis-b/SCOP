const express = require('express');
const app = express();
const path = require('path');


// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
//app.engine('html', require('ejs').renderFile);   //esta configuracion sirve para que el motor de plantillas ejs procese directamente los archivos html
    // settings view engine  agregar nuevas funcionalidades
    //      a las ventalas html
//app.set('view engine', 'ejs');



//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes 
//app.use(require('./routes/index'));
app.get('/', function(req, res) {
    res.render('index.html');
});

// static files
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, 'public/img')));
//app.use(express.static(path.join(__dirname, 'public/libs')));
//app.use(express.static(path.join(__dirname, 'public/views')));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000);
console.log('Server on port 3000');