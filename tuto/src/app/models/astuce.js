const mongoose=require('mongoose') ;
var validate = require('mongoose-validator');
const Schema = mongoose.Schema;
const ObjectId =mongoose.Schema.Types.ObjectId;


let Astuce= new Schema({
_id: Schema.Types.ObjectId,

    titre: {
        type: String
    },
    texte:{
      type: String,
      required:true,
      uppercase:true





    },
    image:{
      type: String
    },
});

//var collectionName = 'liste'
//var Liste=mongoose.model('Liste', ListeSchema,collectionName);
module.exports= mongoose.model('Astuce', Astuce,"astuces");
