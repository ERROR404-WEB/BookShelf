const mongoose = require('mongoose');
const Books = require('../models/books');
const express = require('express');


const router = express.Router();



router.post('/uploadBook', async(req, res) => {
    try{
        const {name,image,booklink} = req.body;
        const book = new Books({
            name,
            image,
            booklink
        })
        const savedBook = await book.save();
        res.json(savedBook);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("Internal Error Occured in uploadBook route");
    }

})


module.exports = router;