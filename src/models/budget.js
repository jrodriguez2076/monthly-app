const mongoose = require ('mongoose');
const { Schema } = mongoose;

const budgetSchema = new Schema({
   name: {type: String},
   month: {type: String, required: true },
   description: {type: String, maxlength:140 },
   amount: {type: Number, required: true },
   currentlySpent: {type: Number, required: true }
});

module.exports = mongoose.model('budget', budgetSchema);