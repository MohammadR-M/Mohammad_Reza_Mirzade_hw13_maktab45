const express = require('express')
const router = express.Router()
const fs = require("fs")

router.get("/page4", function (req, res){
    res.sendFile(path.join(__dirname, '../public', 'index4.html'));
});

module.exports = router;