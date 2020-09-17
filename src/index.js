const express = require('express');
const app = express();
const path = require('path')
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.set('port', 3000);
app.set('views', path.join(__dirname,'/views'))
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/js'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cookieParser());
app.use(session({
    secret: "Shh-its-a-secret!",
    resave: false,
    saveUninitialized: false

}));

app.get('/',(req, res) => {
    res.render('index');
})
app.get('/next',(req, res) => {
    res.render('next');
})
app.post('/', (req, res) => {
    if(req.session.page_views){
        req.session.page_views++;
        res.status(200).json({
            status:200,
            response: "You visited this page " + req.session.page_views + " times"
        })
     } else {
        req.session.page_views = 1;
        res.status(200).json({
            status:200,
            response: "Welcome to this page for the first time!"
        })
     }
})

app.listen(app.get('port'))
console.log('Server on port 3000');