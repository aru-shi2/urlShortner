const {Router}=require("express");
const redirectRouter=Router();

const {getUrl}=require('../controller/urlController')

redirectRouter.get("/:sCode",getUrl)

module.exports={
    redirectRouter
}