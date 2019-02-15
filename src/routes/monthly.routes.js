/*Definir operaciones para cada url del browser*/
const express = require('express');
const router = express.Router();

const Expense = require('../models/expense');
const Income = require('../models/income');
const Budget = require('../models/budget');

//route para obtener todos los gastos del mes
router.get('/', async (req,res)=>{
    let month = req.query.month;
    console.log("Fetching from API");
    const expenses = await Expense.find({month}).sort({date: -1});
    res.json(expenses);        
});

router.get('/edit', async (req,res)=>{
    try {
    let ExpenseId = req.query._id;
    console.log(req.query._id);
    const expenses = await Expense.findById(ExpenseId);
    console.log(expenses);
    res.json(expenses);
    } catch (err){
        console.log(`Error Dude! this was the cause: ${err}`);
    }        
});


//route para obtener solo un gasto por id
router.get('/:id', async (req,res)=>{
    const expense = await Expense.findById(req.params.id);
    res.json(expense);
})

//Route para agregar un gasto
router.post('/', async (req,res)=>{
    // const {name, place, date, description, entry, ammount, cash, month} = req.body;
    console.log(req.body);
    const expense = new Expense(req.body);
    console.log(expense)
    await expense.save();
    res.json('Status: Expense Saved');
    console.log('SAVED!!')
});


//Route para editar un gasto por id
router.put('/:id',async (req,res)=>{
    const { name, place } =req.body;
    const UpdateExpense = {name, place}
    await Expense.findByIdAndUpdate(req.params.id, UpdateExpense);

    res.json({status : 'Expense Updated'});
});

//Route para eliminar un gasto por id
router.delete('/:month/:id',async (req,res)=>{
    console.log(`Parameters received are ${req.params.id} and ${req.params.month}`);
    const month = req.params.month;
    await Expense.findByIdAndDelete(req.params.id);
    const newExpense = await Expense.find({month}).sort({date: -1})
    res.json(newExpense);
})



module.exports = router;