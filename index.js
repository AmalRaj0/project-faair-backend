//loads .env file into process.env variable
require('dotenv').config()//Loads .env file contents into process.env by default. If DOTENV_KEY is present, it smartly attempts to load encrypted .env.vault file contents into process.env.
const bodyParser=require("body-parser")
//ecpress
const express=require('express')
//cors
const cors=require('cors')
//creating backend app

const pfserver=express()
const db=require("./DB/connection")
const appmiddeleware=require("./middlewares/appmiddleware")
const jwtmiddeleware=require('./middlewares/jwtMiddleware')
pfserver.use(cors({
    origin:"http://localhost:3000"
}))

const router = require("./route")
pfserver.use(bodyParser.urlencoded({ extended: true }));
pfserver.use(bodyParser.json());
pfserver.use(express.json())
pfserver.use(appmiddeleware)
pfserver.use('/uploads',express.static('./uploads'))//to upload image from backend to frontend
pfserver.use(router)

const port= 4000 || process.env.port
pfserver.listen(port,()=>{
    console.log("port is ready to run in ",+port);
})

//http

pfserver.get("/",(req,res)=>{
    res.send("<h1>hi</h1>")
})