const express = require("express")
const eventRouter = express.Router()

// index
eventRouter.get("/",(req,res)=>{
    res.render("index.ejs")
})

// new
eventRouter.get("/new", (req,res)=>{
    res.send("new")
})

// create
eventRouter.post("/",(req,res)=>{
    res.send(req.body)
})

// show
eventRouter.get("/:id", (req,res)=>{
    res.send(req.params.id)
})

// edit
eventRouter.get("/:id/edit",(req,res)=>{
    res.send(req.params.id)
})

// update
eventRouter.put("/:id",(req,res)=>{
    res.send(req.params.id)
})

// delete
eventRouter.delete("/:id",(req,res)=>{
    res.send("deleted")
})

module.exports = eventRouter