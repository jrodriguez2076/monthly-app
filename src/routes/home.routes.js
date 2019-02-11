const express = require('express');
const homeRouter = express.Router();
const path = require('path');


homeRouter.get('/', async (req,res)=>{
    console.log('hello')
    });

module.exports = homeRouter;