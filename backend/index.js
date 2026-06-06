const express = require('express')
const app = express()
const PORT=process.env.PORT||3000;
const cors=require("cors");
const mongoose= require("mongoose");
require('dotenv').config();

app.use(cors({
  origin:"http://localhost:5173",
}))

app.use(express.json());

const {urlRouter}=require('./routes/urlRoute')
const {redirectRouter}=require('./routes/redirectRoute')
const {qrRouter}=require('./routes/qrRoute')

app.use('/api/v1/short',urlRouter);
app.use('/',redirectRouter);
app.use('/api/v1/qr',qrRouter);

const mongoose= require("mongoose");
require('dotenv').config();

async function main() {
  await mongoose.connect(process.env.DATABASE_URL)
console.log("database connected")
app.listen(PORT,()=>{
  console.log(`server runing on ${PORT}`)
})
}
main()