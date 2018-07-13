/*Definir operaciones para cada url del browser*/
const express = require('express');
const router = express.Router();

const Expense = require('../models/expense');

router.get('/', async (req,res)=>{
    const expenses = await Expense.find();
    console.log(expenses);
    res.json(expenses);        
});

router.post('/', async (req,res)=>{

    const {madeBy, place, date, description, entry, ammount, cash} = req.body;
    const expense = new Expense(madeBy, place, date, description, entry, ammount, cash);
    await expense.save();
    res.json('Status: Expense Saved');
})

module.exports = router;