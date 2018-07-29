/*Definir operaciones para cada url del browser*/
const express = require('express');
const router = express.Router();

const Expense = require('../models/expense');
const Income = require('../models/income');
const Budget = require('../models/budget');

//route para obtener todos los gastos
router.get('/', async (req,res)=>{
    const expenses = await Expense.find();
    console.log(expenses);
    res.json(expenses);        
});

//route para obtener todos los ingresos
router.get('/income', async (req,res)=>{
    const incomes = await Income.find();
    console.log(incomes);
    res.json(incomes);        
});


//route para obtener todos los presupuestos
router.get('/budget', async (req,res)=>{
    const budgets = await Budget.find();
    console.log(budgets);
    res.json(budgets);        
});


//route para obtener solo un gasto por id
router.get('/:id', async (req,res)=>{
    const expense = await Expense.findById(req.params.id);
    res.json(expense);
})

//Route para agregar un gasto
router.post('/', async (req,res)=>{
    const {name, place, date, description, entry, ammount, cash} = req.body;
    const expense = new Expense({name, place, date, description, entry, ammount, cash});
    await expense.save();
    res.json('Status: Expense Saved');
});


//Route para agregar un ingreso
router.post('/income', async (req,res)=>{
    const {name, ammount, month} = req.body;
    const income = new Income({name, ammount, month});
    console.log(income);
    await income.save();
    res.json('Status: Income Saved');
})

//Route para agregar un ingreso
router.post('/budget', async (req,res)=>{
    console.log(req.body);
    const {name, month, description, amount, currentlySpent} = req.body;
    const budget = new Budget({name, month, description, amount, currentlySpent});
    console.log(budget);
    await budget.save();
    res.json('Status: Budget Saved');
})

//Route para editar un gasto por id
router.put('/:id',async (req,res)=>{
    const { name, place } =req.body;
    const UpdateExpense = {name, place}
    await Expense.findByIdAndUpdate(req.params.id, UpdateExpense);

    res.json({status : 'Expense Updated'});
});

//Route para eliminar un gasto por id
router.delete('/:id',async (req,res)=>{
    await Expense.findByIdAndRemove(req.params.id);
    res.json({status : 'Expense Deleted'});
})



module.exports = router;