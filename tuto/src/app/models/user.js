const mongoose=require('mongoose') ;
var validate = require('mongoose-validator');
const Schema = mongoose.Schema;
const ObjectId =mongoose.Schema.Types.ObjectId;


let USERS= new Schema({
_id: Schema.Types.ObjectId,

    id: {
        type: Number
    },
    username:{
      type: String,

    },
    password:{
      type: String,

    },
});

//var collectionName = 'liste'
//var Liste=mongoose.model('Liste', ListeSchema,collectionName);
module.exports= mongoose.model('USERS', USERS);
