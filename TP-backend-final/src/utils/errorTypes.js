class AppError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

class ValidationError extends AppError {
    constructor(message) {
        super(message || 'Validation Error', 400);
    }
}

class AuthenticationError extends AppError {
    constructor(message) {
        super(message || 'Authentication Error', 401);
    }
}

class NotFoundError extends AppError {
    constructor(message) {
        super(message || 'Resource Not Found', 404);
    }
}

class ForbiddenError extends AppError {
    constructor(message) {
        super(message || 'Access Forbidden', 403);
    }
}

module.exports = {
    AppError,
    ValidationError,
    AuthenticationError,
    NotFoundError,
    ForbiddenError
};
