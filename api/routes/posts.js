const express = require("express");

const router = express.Router();
router.get("/blog", (req, res) => {
    const str =[{
        "title":"somename",
        'desc':"description",
        'img':'random url'
    }];
    res.end(JSON.stringify(str));
});
router.post('/blog',(req,res)=>{
    res.end('NA');
});
module.exports =  router;