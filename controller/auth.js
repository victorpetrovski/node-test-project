const BaseController = require('./base');
var passport = require('passport');

class NotesController extends BaseController{

    constructor(){
        super();
    }

    registerUser(req,res){
        let responseManager = this._responseManager;
        model.user.register(new model.user({ username : req.body.username }), req.body.password, function(err, account) {
            if (err) {
                responseManager.getDefaultResponseHandler(res).onError(err);
//                return res.render("register", {info: "Sorry. That username already exists. Try again."});
            }else
                responseManager.getDefaultResponseHandler(res).onSuccess("User Created");
        });
    }

    loginUser(req,res){

    }
}


module.exports = NotesController;