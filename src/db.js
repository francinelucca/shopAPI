const mongoose = require('mongoose');
const winston = require('winston');

class Database {
    constructor() {
        this.mongoURI = 'mongodb://localhost:27017/shopDB';
        this.connect();
    }


    connect() {
        mongoose.connect(this.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,})
            .then(() => {
                winston.log('info', 'Database connection successful');
            })
            .catch(() => {
                winston.log('error', 'Database connection error');
            });
    }
}

module.exports = new Database();