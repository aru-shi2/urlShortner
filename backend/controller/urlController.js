const {z}=require("zod")
const {nanoid}=require('nanoid')
const {urlModel}=require('../model/urlModel')
const QRCode=require("qrcode")

const postUrl=async (req,res)=>{
    try{
    const url=req.body.url
    console.log(url)
const urlSchema=z.object({
    url:z.string()
})

const parsedurl=urlSchema.safeParse(req.body)

if(!parsedurl.success){
   return res.json({
        message:"incorrect format"
    })
}

let id=nanoid(6);
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
    short:`https://urlshortner-0ez9.onrender.com/${id}`
})

    }catch(err){
        res.status(500).json({
            msg:"error"
        })
        console.log(err)
    }
}

const getUrl=async (req,res)=>{
   try {
        const sCode=req.params.sCode;
    
    const realUrl=await urlModel.findOne({
        shortCode:sCode
    })

    console.log(realUrl)
    if(!realUrl){
        return res.status(404).json({
            msg:"not found!"
        })
    }

    return res.redirect(realUrl.longUrl)

}catch(e){
    return res.status(500).json({
        msg:"server error"
    })
}
}

const getQR=async(req,res)=>{
    try{
    const url=req.body.url;
    const qrCode=await QRCode.toDataURL(url)
    res.json({qrCode})
    }catch(e){
        res.status(500).json({
            msg:"Failed to generate QR"
        })
    }
}

module.exports={
    postUrl,
    getUrl,
    getQR
}