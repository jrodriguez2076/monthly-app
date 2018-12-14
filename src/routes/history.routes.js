/*Definir operaciones para cada url del browser*/
const express = require('express');
const router = express.Router();

const Expense = require('../models/expense');
const Income = require('../models/income');
const Budget = require('../models/budget');
const Goal = require('../models/goal');

//route para obtener todas las metas
router.get('/', async (req,res)=>{
await res.render('../public/index.html')
});


module.exports = router;