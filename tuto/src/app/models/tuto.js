const mongoose=require('mongoose') ;

const Schema = mongoose.Schema;
const ObjectId =mongoose.Schema.Types.ObjectId;

let Tuto= new Schema({
_id: Schema.Types.ObjectId,

    titre: {
        type: String
    },
    contenu:{
      type: String
    },
    image:{
      type: String
    },
});

//var collectionName = 'liste'
//var Liste=mongoose.model('Liste', ListeSchema,collectionName);
module.exports= mongoose.model('Tuto', Tuto,'tutos');
