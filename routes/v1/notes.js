var express = require('express');
var router = express.Router();

const NotesController = require(APP_CONTROLLER_PATH + 'note');
let notesController = new NotesController();

/* GET users listing. */

/**
 * @api {get} /notes List all Notes
 * @apiGroup Notes
 * @apiSuccess {Object[]} notes Notes list
 * @apiSuccess {Number} notes.id Task id
 * @apiSuccess {String} notes.description Note description
 * @apiSuccess {Date} notes.updated_at Update's date
 * @apiSuccess {Date} notes.created_at Register's date
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "id": 1,
 *      "noteDescription": "Ovoj note e updatiran vtoro",
 *      "updated_at": "2016-02-10T15:46:51.778Z",
 *      "created_at": "2016-02-10T15:46:51.778Z"
 *    }]
 */
router.get('/',notesController.getAll);
router.post('/',notesController.createNote);

module.exports = router;
