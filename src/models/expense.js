const mongoose = require ('mongoose');
const { Schema } = mongoose;

const expenseSchema = new Schema({
   madeBy: {type: String, required: true },
   place: {type: String},
   date: {type: Date, required: true },
   description: {type: String, maxlength:140 },
   entry: {type: String, required: true },
   ammount: {type: Number, required: true },
   Cash: {type: Boolean}
});

module.exports = mongoose.model('expense', expenseSchema);