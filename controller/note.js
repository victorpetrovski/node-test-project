const BaseController = require('./base');
const Notes = require('../model/note');
class NotesController extends BaseController{

    constructor(){
        super();
    }

    getAll(req,res,next){
        let responseManager = this._responseManager;
        Notes.getNotes(0,function (error,data) {
            if(error)
                responseManager.getDefaultResponseHandler(res).onError(error);
            responseManager.getDefaultResponseHandler(res).onSuccess(data);
        });
    }
}
module.exports = NotesController;