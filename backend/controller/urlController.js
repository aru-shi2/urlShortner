const {z}=require("zod")
const nanoid=require('nanoid')
const {urlModel}=require('../model/urlModel')

const getUrl=async (req,res)=>{
    try{
    const url=req.body.url
    
    const urlSchema=z.object({
    url:z.string()
})

const parsedurl=urlSchema.safeParse(req.body)

if(!parsedurl.success){
   return res.json({
        message:"incorrect format"
    })
}

const id=nanoid(6);

console.log(id)

const existing=await urlModel.findOne({shortCode:id})

if(existing){
    id=nanoid(6);
}

const newurl=await urlModel.create({
    longUrl:req.body.url,
    shortCode:id
})

return res.json({
    short:`http://localhost:3000/${id}`
})

    }catch(err){
        res.status(500).json({
            msg:"error"
        })
    }
}
module.exports={
    getUrl
}