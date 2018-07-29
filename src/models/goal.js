const mongoose = require ('mongoose');
const { Schema } = mongoose;

const goalSchema = new Schema({
   name: {type: String, required: true},
   amount: {type: Number, required: true },
   currentlySaved: {type: Number, required: true},
   endDate: {type: Date, required: true }
});

module.exports = mongoose.model('goal', goalSchema);