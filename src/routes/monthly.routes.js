/*Definir operaciones para cada url del browser*/
const express = require('express');
const router = express.Router();

const Expense = require('../models/expense');
const Income = require('../models/income');

//route para obtener todas las tareas
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

//route para obtener solo una tarea por id
router.get('/:id', async (req,res)=>{
    const expense = await Expense.findById(req.params.id);
    res.json(expense);
})

//Route para agregar una tarea
router.post('/', async (req,res)=>{
    console.log("ACA EL POST");
    console.log(req.body);
    const {name, place, date, description, entry, ammount, cash} = req.body;
    console.log(typeof cash);
    const expense = new Expense({name, place, date, description, entry, ammount, cash});
    
    console.log(expense);
    await expense.save();
    res.json('Status: Expense Saved');
})

router.post('/income', async (req,res)=>{
    const {name, ammount, month} = req.body;
    const income = new Income({name, ammount, month});
    console.log(income);
    await income.save();
    res.json('Status: Income Saved');
})

//Route para editar una tarea por id
router.put('/:id',async (req,res)=>{
    const { name, place } =req.body;
    const UpdateExpense = {name, place}
    await Expense.findByIdAndUpdate(req.params.id, UpdateExpense);

    res.json({status : 'Expense Updated'});
});

//Route para eliminar una tarea por id
router.delete('/:id',async (req,res)=>{
    await Expense.findByIdAndRemove(req.params.id);
    res.json({status : 'Expense Deleted'});
})

/////////////////////////////////////
/* Resta agregar nuevas rutas, y comenzar a trabajar con front */

module.exports = router;