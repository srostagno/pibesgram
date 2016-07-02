var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
  title('PibesGram');
  var main = document.getElementById('main-container');

  var pictures = [
    {
      user: {
        username: 'Silvio Rostagno',
        avatar: 'https://lh3.googleusercontent.com/-Bj8eX68PBkA/AAAAAAAAAAI/AAAAAAAAAAA/RZ7Pgzxm-n4/photo.jpg'
      },
      url: 'sample1.jpg',
      likes: 10,
      liked: false,
      createdAt: new Date()
    },
    {
      user: {
        username: 'Silvio Rostagno',
        avatar: 'https://lh3.googleusercontent.com/-Bj8eX68PBkA/AAAAAAAAAAI/AAAAAAAAAAA/RZ7Pgzxm-n4/photo.jpg'
      },
      url: 'sample2.jpg',
      likes: 10,
      liked: false,
      createdAt: new Date().setDate(new Date().getDate()-10)
    },
  ];

  empty(main).appendChild(template(pictures));
})
