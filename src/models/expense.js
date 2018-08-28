const mongoose = require ('mongoose');
const { Schema } = mongoose;

const expenseSchema = new Schema({
   name: {type: String},
   place: {type: String},
   date: {type: Date, required: true },
   description: {type: String, maxlength:140 },
   entry: {type: String, required: true },
   ammount: {type: Number, required: true },
   month: {type: String, required: true},
   cash: {type: Boolean, required: true}
});

module.exports = mongoose.model('expense', expenseSchema);