const {Router}=require("express");
const urlRouter=Router();

const {getUrl}=require('../controller/urlController')

urlRouter.post("/",getUrl)

module.exports={
    urlRouter
}