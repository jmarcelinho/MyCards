var express = require('express');
var router = express.Router();
const { json } = require('express');


let cards = [];

const fs = require('fs');
const data = fs.readFileSync('./data/db.json');
let jsonData = JSON.parse(data);

cards = jsonData.cards;

/* GET cards listing. */
router.get('/', function(req, res, next) {
    res.json(cards);
});

router.get('/:id', function(req, res, next) {
    if(req.params.id > 0 && req.params.id <= cards.length){
        res.json(cards[req.params.id - 1]);
    }
    else{
        res.json("NOT FOUND");
    }
});

router.post('/', function(req, res, next) {
    let newId = cards.length + 1;
    let newName = req.body.name;
    cards.push({"id": newId, "name": newName, "persons": []});
    res.json(cards)
});


module.exports = router;