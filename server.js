var express = require('express');
var multer = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
})

var upload = multer({ storage: storage }).single('picture')

var app = express();

app.set('view engine', 'pug');

//nuevo
app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    response.render('index', { title: 'PibesGram' });
}).listen(app.get('port'), function(err) {
    if (err) return console.log('Hubo un error'), process.exit(1);
    console.log('App is running, server is listening on port ', app.get('port'));
});

//

app.use(express.static('public'));

//app.get('/', function(req, res) {

//  res.render('index', { title: 'PibesGram' });
//})

app.get('/signup', function(req, res) {
  res.render('index', { title: 'PibesGram - SignUp' });
})

app.get('/signin', function(req, res) {
  res.render('index', { title: 'PibesGram - SignIn' });
})

app.get('/api/pictures', function (req, res) {
  var pictures = [
    {
      user: {
        username: 'Silvio Rostagno',
        avatar: 'https://lh3.googleusercontent.com/-Bj8eX68PBkA/AAAAAAAAAAI/AAAAAAAAAAA/RZ7Pgzxm-n4/photo.jpg'
      },
      url: 'sample1.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'Silvio Rostagno',
        avatar: 'https://lh3.googleusercontent.com/-Bj8eX68PBkA/AAAAAAAAAAI/AAAAAAAAAAA/RZ7Pgzxm-n4/photo.jpg'
      },
      url: 'sample2.jpg',
      likes: 15,
      liked: false,
      createdAt: new Date().getTime()
    },
  ];

  setTimeout(function () {
    res.send(pictures);
  }, 2000);
})

app.post('/api/pictures', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.send(500, "Error uploading file");
    }
      res.send("File uploaded");
  })
})

//app.listen(3000, function (err) {
//  if (err) return console.log('Hubo un error'), process.exit(1);

//  console.log('Platzigram escuchando en el puerto 3000');
//})
