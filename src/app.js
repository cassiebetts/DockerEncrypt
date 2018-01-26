const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');


app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


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

app.listen(3000,() => console.log('app listening on port 3000'))
