const {Router}=require("express");
const urlRouter=Router();

const {postUrl}=require('../controller/urlController')

urlRouter.post("/",postUrl)

module.exports={
    urlRouter
}