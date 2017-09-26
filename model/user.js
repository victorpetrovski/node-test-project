/**
 * Created by Victor on 2/19/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var page_limit = 10;

var UserSchema = new Schema({
    name :{
        type    : String,
        unique  : true
    },
    password:{
        type    :String
    },
    email:{
       type     : String,
       unique   : true
    }
}, { collection: '_User' , versionKey: false });


// UserSchema.methods.toJSON = function () {
//     let obj = this.toObject();
//     delete obj.password;
//     return obj
// };

UserSchema.plugin(passportLocalMongoose);

//Encrypt user password
// UserSchema.pre('save', function (next) {
//     var user = this;
//     if(this.isModified('password') || this.isNew){
//         bcrypt.genSalt(10,function (err,salt) {
//             if(err){
//                 return next(err);
//             }
//             bcrypt.hash(user.password,salt,function (err,hash) {
//                 if(err){
//                     return next(err);
//                 }
//                 user.password = hash;
//                 next();
//             });
//         });
//     }else {
//         return next();
//     }
// });

// UserSchema.methods.comparePassword = function (passw,cb) {
//     bcrypt.compare(passw,this.password,function (err,isMatch) {
//         if(err){
//             return cb(err);
//         }
//         cb(null,isMatch);
//     });
// };
var User = module.exports =  mongoose.model('_User', UserSchema);

/**
 * Functions conected to the User model
 * */

User.registerUser = function (req,callback) {
    UserSchema.register(new User(req.body), callback);
};

User.listUsers = function (page = 0, callback) {
    User.find(callback);
};

// // Get Notes
// module.exports.getNotes = function (page = 0,callback) {
//     Note.find(callback).populate('createdBy', '-password').skip(page * page_limit).limit(page_limit);
// };