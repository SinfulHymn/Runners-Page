const express = require("express")
const { appendFile } = require("fs")
const { resourceUsage } = require("process")
const raceRouter = express.Router()

// index
raceRouter.get("/",(req,res)=>{
    res.send("index")
})

// new
raceRouter.get("/new", (req,res)=>{
    res.send("new")
})

// create
raceRouter.post("/",(req,res)=>{
    res.send(req.body)
})

// show
raceRouter.get("/:id", (req,res)=>{
    res.send(req.params.id)
})

// edit
raceRouter.get("/:id/edit",(req,res)=>{
    res.send(req.params.id)
})

// update
raceRouter.put("/:id",(req,res)=>{
    res.send(req.params.id)
})

module.exports = raceRouter