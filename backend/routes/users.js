const { json } = require('express');
var express = require('express');
var router = express.Router();

let users = []

// const fs = require('fs');
// const data = fs.readFileSync('/file.md'); // blocks here until file is read
// Você pode fazer isso de forma assíncrona (quando a leitura for completa uma função será chamada
const fs = require('fs');
fs.readFile('./data/db.json', (err, data) => {
  if (err) throw err;

  let jsonData = JSON.parse(data)

  users = jsonData.users
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.post('/', function(req, res, next) {
  let newId = users.length + 1;
  let newName = req.body.user;
  users.push({"id": newId, "name": newName});
  res.json(users)
});

module.exports = router;
