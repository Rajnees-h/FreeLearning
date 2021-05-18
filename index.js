const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// sendFile will go here
app.get('/', function(req, res) {
  res.render('index.ejs');
});

app.get('/loadSkills/', function(req, res) {
    res.render('loadSkills.ejs',{skill:req.query.skill});
  });

  app.get('/loadProfiles/', function(req, res) {
    res.render('loadProfiles.ejs',{skill:req.query.skill , type:req.query.type});
  });

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, 'htmlFiles/login.html'));
  });

  app.get('/myProfile', function(req, res) {
    res.sendFile(path.join(__dirname, 'htmlFiles/profile.html'));
  });

  app.get('/signUp', function(req, res) {
    res.sendFile(path.join(__dirname, 'htmlFiles/signUp.html'));
  });






app.listen(port);
console.log('Server started at http://localhost:' + port);