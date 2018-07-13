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
    console.log('entre en post');
    console.log(req.body);
    const {name, place} = req.body;
    const expense = new Expense({name, place});
    console.log(expense);
    await expense.save();
    res.json('Status: Expense Saved');
})

module.exports = router;