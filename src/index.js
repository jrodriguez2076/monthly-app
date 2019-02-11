/*Express Server*/
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const { mongoose } = require('./database');


//settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use('/api/month', require('./routes/monthly.routes'));

//app.use('/history',require('./routes/history.routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')))

app.get('*', async (req, res) => {
    await res.sendFile(path.join(__dirname, '/public/index.html'), (err) => {
        if (err) {
            res.status(500).send(err)
        }
    })
});

//Start server
app.listen(app.get('port'), () => {
    console.log(`Server listening on ${app.get('port')}`);
});