const BaseController = require('./base');
const User =  config.db.user;
let responseManager;
class UserController extends BaseController{

    constructor(){
        super();
        responseManager = this._responseManager;
    }

    getUsers(req,res){
        model.user.listUsers(0,function (error,data) {

            console.log("tuka stiga ?" + error);
            if(error)
                responseManager.getDefaultResponseHandler(res).onError(error);
            else
                responseManager.getDefaultResponseHandler(res).onSuccess(data);
        })
    }



}

module.exports = UserController;