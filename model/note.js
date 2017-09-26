var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var page_limit = 10;

var NoteSchema = mongoose.Schema({
    _id: {
        type: String,
        getter: function(val) { return this._id.toString(); },
        unique: true
    },
    noteDescription:{
        type : String
    },
    _created_at:{
        type : Date,
        default : Date.now
    },
    _updated_at:{
        type : Date,
        default : Date.now
    },
    number : {
        type : Number,
        min : 5,
        required: true
    },
    createdBy: [{ type: Schema.Types.String, ref:'_User'}]

}, { collection: 'Note' , versionKey: false });


NoteSchema.methods.toJSON = function () {
    let obj = this.toObject();
    delete obj._updated_at;
    return obj;
};

NoteSchema.pre('update', function (next, done) {
    this._updated_at = Date.now();
    next();
});

NoteSchema.pre("save", function(next){
    // this._id is a string
    this.set("_id", mongoose.Types.ObjectId(this._id), {strict: false});

    this.validat
    // this._id is still a string
    next();
});

var Note = module.exports = mongoose.model("Note",NoteSchema);

// Get Notes
module.exports.getNotes = function (page = 0,callback) {
    Note.find(callback).populate('createdBy', '-password').skip(page * page_limit).limit(page_limit);
};

//Add Note
Note.createNote = function (note,callback) {
    Note.create(note,callback);
};

//Update Note
Note.updateNote = function (request, callback) {
    Note.findByIdAndUpdate(request.params.id,request.body,callback);
};

//Delete Note
module.exports.removeNote = function (id, callback) {
    Note.findByIdAndRemove(id,callback);
};