/*Definir operaciones para cada url del browser*/
const express = require('express');
const router = express.Router();

const Expense = require('../models/expense');
const Income = require('../models/income');
const Budget = require('../models/budget');
const Goal = require('../models/goal');

//route para obtener todas las metas
router.get('/', async (req,res)=>{
    const goals = await Goal.find();
    console.log(goals);
    res.json(goals);        
});

//Route para agregar un ingreso
router.post('/', async (req,res)=>{
    console.log(req.body);
    const {name, amount, currentlySaved, endDate} = req.body;
    const goal = new Goal({name, amount, currentlySaved, endDate});
    console.log(goal);
    await goal.save();
    res.json('Status: Goal Saved');
})


module.exports = router;