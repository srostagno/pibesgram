var express = require('express');

var app = express();

app.set('view engine', 'pug');

//nuevo
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
//

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index', { title: 'PibesGram' });
})

app.get('/signup', function(req, res) {
  res.render('index', { title: 'PibesGram - SignUp' });
})

app.get('/signin', function(req, res) {
  res.render('index', { title: 'PibesGram - SignIn' });
})

app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Platzigram escuchando en el puerto 3000');
})
