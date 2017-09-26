const BaseController = require('./base');
let responseManager;

class NotesController extends BaseController{
    constructor(){
        super();
        responseManager = this._responseManager;
    }

    getAll(req,res){
        model.note.getNotes(0,function (error,data) {
            if(error)
                responseManager.getDefaultResponseHandler(res).onError(error);
            else
                responseManager.getDefaultResponseHandler(res).onSuccess(data);
        });
    }

    createNote(req,res,next){
        let responseManager = this._responseManager;
        model.note.createNote(req.body,function (error,data) {
            if(error)
                responseManager.getDefaultResponseHandler(res).onError(error);
            else
                responseManager.getDefaultResponseHandler(res).onSuccess(data);
        });
    }

}


module.exports = NotesController;