var express = require('express');
var router = express.Router();

const NotesController = require('../controller/note');
let notesController = new NotesController();

/* GET users listing. */

router.get('/',notesController.getAll);

module.exports = router;
