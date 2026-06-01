const {Router}=require("express")
const qrRouter=Router()

const {getQR}=require("../controller/urlController")

qrRouter.post("/",getQR)

module.exports={
    qrRouter
}