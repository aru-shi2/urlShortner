const express = require('express')
const app = express()

app.use(express.json());

const {urlRouter}=require('./routes/urlRoute')

app.use('/api/v1/short',urlRouter);

const mongoose= require("mongoose");
require('dotenv').config();

async function main() {
  await mongoose.connect(process.env.DATABASE_URL)
console.log("database connected")
app.listen(3000)
}
main()