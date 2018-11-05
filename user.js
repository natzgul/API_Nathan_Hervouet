var fs = require('fs');
const express = require('express');
const router = express.Router();

//on retourne tous les utilisateurs
router.get('/', (req, res) => {
    var obj;
    fs.readFile('user.json', 'utf8', function (err, data) {
      if (err) throw err;
      obj = JSON.parse(data);
      res.send(obj)
    });
});

//on retourne un utilisateur par id 
router.get('/:userId', (req, res) => {
     fs.readFile('user.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        user = obj[req.params.userId]
        res.send(user)
      });
});

//on ecrit un nouvel utilisateur
router.post('/new', (req, res) => {
    newUser = req.body
    fs.readFile('user.json', function (err, data) {
        var json = JSON.parse(data)
        json.push(newUser)
        fs.writeFile("user.json", JSON.stringify(json, null, 4))
        res.send(data)
    })
});

//on supprime utilisateur
router.delete('/:userId', (req, res) => {
    fs.readFile('user.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        user = obj.splice(req.params.userId, 1)
        fs.writeFile("user.json", JSON.stringify(obj, null, 4))
        res.send(user)
      });                                                   
});



module.exports = router;