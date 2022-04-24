const express = require("express");
const router = express.Router()
const indexAction = require("../controllers/index.js")

// index 
router.get("/", indexAction.index)
// seed
router.get("/seed", indexAction.seed)
// new 
router.get("/new",indexAction.new)




module.exports = router
