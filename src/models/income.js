const mongoose = require ('mongoose');
const { Schema } = mongoose;

const incomeSchema = new Schema({
   name: {type: String, required: true},
   ammount: {type: Number, required: true},
   month: {type: String, required: true}
});

module.exports = mongoose.model('income', incomeSchema);