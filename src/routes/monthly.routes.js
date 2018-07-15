/*Definir operaciones para cada url del browser*/
const express = require('express');
const router = express.Router();

const Expense = require('../models/expense');

//route para obtener todas las tareas
router.get('/', async (req,res)=>{
    const expenses = await Expense.find();
    console.log(expenses);
    res.json(expenses);        
});

//route para obtener solo una tarea por id
router.get('/:id', async (req,res)=>{
    const expense = await Expense.findById(req.params.id);
    res.json(expense);
})

//Route para agregar una tarea
router.post('/', async (req,res)=>{
    console.log('entre en post');
    console.log(req.body);
    const {name, place} = req.body;
    const expense = new Expense({name, place});
    console.log(expense);
    await expense.save();
    res.json('Status: Expense Saved');
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

module.exports = router;