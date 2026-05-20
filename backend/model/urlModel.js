const mongoose=require('mongoose');
const Schema=mongoose.Schema

const url=new Schema({
    longUrl:{
        type:String, required:true
    },
    shortCode:{
        type:String,
        required:true,
        unique:true
    }
})

const urlModel=mongoose.model('urlshort',url);

module.exports={
    urlModel
}