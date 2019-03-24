const mongoose = require ('mongoose');

const URI = 'mongodb+srv://jrodriguez2076:19505503@cluster0-xnhqm.gcp.mongodb.net/test?retryWrites=true';

mongoose.connect(URI)
    .then(db=> console.log('db is connected!'))
    .catch(err=> console.log('db service not available'));

module.exports = mongoose;

