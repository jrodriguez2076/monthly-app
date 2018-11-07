const mongoose = require ('mongoose');

const URI = 'mongodb://localhost/monthly-expenses';

mongoose.connect(URI)
    .then(db=> console.log('db is connected!'))
    .catch(err=> console.log('db service not available'));

module.exports = mongoose;

