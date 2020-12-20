const BaseError = require('./BaseError');

class NotFoundError extends BaseError {
    constructor(message) {
        super(message);
        this.name = 'NotFoundError';
        this.statusCode = 404;
        this.internalCode = 2;
    }
}

module.exports = NotFoundError;