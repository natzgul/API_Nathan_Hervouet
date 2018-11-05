var fs = require('fs');
const express = require('express');
const router = express.Router();

//on retourne tous les items
router.get('/', (req, res) => {
    var obj;
    fs.readFile('item.json', 'utf8', function (err, data) {
      if (err) throw err;
      obj = JSON.parse(data);
      res.send(obj)
    });
});

//on retourne un item par id 
router.get('/:itemId', (req, res) => {
     fs.readFile('item.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        item = obj[req.params.itemId]
        res.send(item)
      });
});

//on ecrit un nouvel item
router.post('/new', (req, res) => {
    newitem = req.body
    fs.readFile('item.json', function (err, data) {
        var json = JSON.parse(data)
        json.push(newitem)
        fs.writeFile("item.json", JSON.stringify(json, null, 4))
        res.send(data)
    })
});

//on supprime un item
router.delete('/:itemId', (req, res) => {
    fs.readFile('item.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        item = obj.splice(req.params.itemId, 1)
        fs.writeFile("item.json", JSON.stringify(obj, null, 4))
        res.send(item)
      });                                                   
});



module.exports = router;