const { json } = require('express');
var express = require('express');
var router = express.Router();

let cards = [];
const fs = require('fs');
const data = fs.readFileSync('./data/db.json');
let jsonData = JSON.parse(data);
cards = jsonData.cards;

function getUsers(id){
  let users = [];
  
  if(id > 0 && id <= cards.length){
    users = cards[id - 1].persons;
  }

  
  return users;
}

function addUser(id, newPerson){
  fs.readFile('./data/db.json', (err, data) => {
    if (err) throw err;
  
    var cards = JSON.parse(data)
  
  });

  fs.appendFile('./data/db.json', newPerson, (err, data) => {
    if (err) throw err;
  
    let jsonData = JSON.parse(data)
  
    jsonData.cards[id].persons = newPerson;

    });
}

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let users = getUsers(req.params.id);
  res.json(users);
});

router.post('/:id', function(req, res, next) {
  let users = getUsers(req.params.id);
  let newId = users.length + 1;
  let newName = req.body.user;
  users.push({"id": newId, "name": newName});
  addUser(req.params.id, users);
  res.json(users)
});

module.exports = router;
