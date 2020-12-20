const express = require("express");
const bodyParser = require("body-parser");
const winston = require('winston');

winston.add(new winston.transports.Console({
    level: 'debug',
    format: winston.format.simple(),
}));

const app = express();

/**
 * parse requests of content-type - application/json
 */
app.use(bodyParser.json());
/**
 * parse requests of content-type - application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({"message": "Congratulations! you are working great!"});
});

app.use('', require('./routes'));

const SERVER_PORT = 8000;
app.listen(SERVER_PORT, () => {
    winston.log('info', `🚀 Server running on port ${SERVER_PORT}.`);
});

module.exports = app;