const express = require("express");
const winston = require('winston');
const morgan = require('morgan')
const cors = require('cors');
const BaseError = require('./constants/errors/BaseError');

winston.add(new winston.transports.Console({
    level: 'debug',
    format: winston.format.simple(),
}));

const app = express();

// log all requests
app.use(morgan('combined'))

/**
 * parse requests of content-type - application/json
 */
app.use(express.json());
/**
 * parse requests of content-type - application/x-www-form-urlencoded
 */
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.get('/', (req, res) => {
    res.json({"message": "Congratulations! you are working great!"});
});

app.use('', require('./routes'));

app.use((err, req, res, next) => {
    if (err instanceof BaseError) {
        res.status(err.statusCode).json({ code: err.internalCode, msg: err.message });
    } else {
        winston.error(err.stack);
        res.status(500).json({ success: false, msg: 'Something broke!' });
    }
});


const SERVER_PORT = 8000;
app.listen(SERVER_PORT, () => {
    winston.log('info', `🚀 Server running on port ${SERVER_PORT}.`);
});

module.exports = app;