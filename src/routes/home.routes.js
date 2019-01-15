/*Definir operaciones para cada url del browser*/
const express = require('express');
const homeRouter = express.Router();
const path = require('path');


// const Goal = require('../models/goal');

// //route para obtener todas las metas
// homeRouter.get('*', async (req,res)=>{
//     res.sendFile(path.join(__dirname, '../public/index.html'), (err)=> {
//         if (err) {
//           res.status(500).send(err)
//         }
//       })
//     });

// //Route para agregar un ingreso
// router.post('/', async (req,res)=>{
//     console.log(req.body);
//     const {name, amount, currentlySaved, endDate} = req.body;
//     const goal = new Goal({name, amount, currentlySaved, endDate});
//     console.log(goal);
//     await goal.save();
//     res.json('Status: Goal Saved');
// })


module.exports = homeRouter;