const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');

app.use(bodyParser());

app.use(express.static(path.join(__dirname, 'public')))

//set up database
mongoose.connect('mongodb://mongo:27017');

const User=mongoose.model('User',{
  username: String,
  password: String,
});

app.post('/user',(req,res)=> {
  const user = new User(req.body);
  user.save().then(res.send(req.body));
});

app.get('/user',(req,res)=> {
  User.find({}).then((results) => res.send(results));
});

app.get('/user/:username',(req,res)=> {
  User.find({username:req.params.username}).then((results) => res.send(results));
});
/*
const hello=mongoose.model('hello',{
  username: String,
  password: String,
});




app.get('/', function(req, res){
  res.send('Hello World Again!')
})

app.get('/hello/:meow', function(req, res){
  res.send(`Hello ${req.params.yo} Again!`)
})

app.get('/meow2', function(req, res){
  const hash = bcrypt.hashSync('asdfsadfsdf');
  const compare = bcrypt.compareSync('asdfsadfsdf', hash);

  res.send(`hash ${hash} | compare ${compare}`);
})

app.post('/meow', function(req, res){
  const hash = bcrypt.hashSync('password');
  // const hash = db.get('users', {username: req.body.username}).get('password');
  const compare = bcrypt.compareSync(req.body.password, hash);

  if(req.body.username == 'cassiebetts' && compare){
    res.send('success!!')
  }else {
    res.send('nah suhn!!')
  }
  // res.send(`Hello Post ${req.body.username}! ${req.body.password}`)
})

// app.post('/register', function(req) {
//   db.save('users', [
//     'username' : req.body.username,
//     'password' : bcrypt.hashSync(req.body.password)
//   ])
// })
*/

app.listen(3000,() => console.log('app listening on port 3000'))
