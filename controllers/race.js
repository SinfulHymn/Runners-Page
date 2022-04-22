const express = require("express")
const { appendFile } = require("fs")
const raceRouter = express.Router()

raceRouter.get("/",(req,res)=>{
    res.send("test")
})

module.exports = raceRouter