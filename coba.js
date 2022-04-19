const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use('/css3', express.static(__dirname + 'public/css3'))
app.use('/css4', express.static(__dirname + 'public/css4'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/aset', express.static(__dirname + 'public/aset'))
app.use('/assets', express.static(__dirname + 'public/assets'))

app.get('/', function(req, res){
   res.render('index');
});

app.get('/game', function(req, res){
   res.render("game");
});


// Route to Homepage
app.get('/in', (req, res) => {
   res.sendFile(__dirname + '/views/index.html');
 });

 // Route to Login Page
app.get('/login', (req, res) => {
   res.sendFile(__dirname + '/views/login.html');
 });

app.post('/login', (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
});

app.listen(3000);
