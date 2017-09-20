var express = require('express');
var router = express.Router();

router.get('/' , function(req,res){
    res.send('admin app');
});

router.get('/products', function(req,res){
    var data = [
        {
            title : "제목입니다.",
            content : "내용입니다.",
            date : "2017-07-15",
        },
        {
            title : "제목입니다.",
            content : "내용입니다.",
            date : "2017-07-15",
        },
        {
            title : "제목입니다.",
            content : "내용입니다.",
            date : "2017-07-15",
        }
    ];
    res.json({ data : data });
});

router.get('/products/reload', function(req,res){
    var data = [
        {
            title : "제목입니다.",
            content : "내용입니다.",
            date : "2017-07-15",
        },
        {
            title : "제목입니다.",
            content : "내용입니다.",
            date : "2017-07-15",
        },
        {
            title : "제목입니다.",
            content : "내용입니다.",
            date : "2017-07-15",
        },
        {
            title : "제목입니다.",
            content : "내용입니다.",
            date : "2017-07-15",
        },
        {
            title : "제목입니다.",
            content : "내용입니다.",
            date : "2017-07-15",
        }
    ];
    res.json({ data : data });
});

module.exports = router;