// src/middleware/errorHandler.js

const { AppError } = require('../utils/errorTypes');

// Error logging middleware
const errorLogger = (err, req, res, next) => {
    console.error('\nError Stack:', err.stack);
    console.error('Error Message:', err.message);
    console.error('Error Name:', err.name);
    next(err);
};

// Error handling middleware
const errorHandler = (err, req, res, next) => {
    // If the error is a mongoose validation error
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            status: 'error',
            type: 'ValidationError',
            message: 'Error de validación',
            details: Object.values(err.errors).map(error => ({
                field: error.path,
                message: error.message
            }))
        });
    }

    // If the error is a mongoose cast error (invalid ID)
    if (err.name === 'CastError') {
        return res.status(400).json({
            status: 'error',
            type: 'CastError',
            message: 'ID inválido',
            details: err.message
        });
    }

    // If it's our custom AppError
    if (err instanceof AppError) {
        return res.status(err.status).json({
            status: 'error',
            type: err.name,
            message: err.message
        });
    }

    // If it's a JWT error
    if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({
            status: 'error',
            type: 'AuthenticationError',
            message: 'Token inválido'
        });
    }

    // If it's a JWT expiration error
    if (err.name === 'TokenExpiredError') {
        return res.status(401).json({
            status: 'error',
            type: 'AuthenticationError',
            message: 'Token expirado'
        });
    }

    // Default error (500 Internal Server Error)
    return res.status(500).json({
        status: 'error',
        type: 'InternalServerError',
        message: 'Error interno del servidor'
    });
};

// 404 handler for undefined routes
const notFoundHandler = (req, res) => {
    res.status(404).json({
        status: 'error',
        type: 'NotFoundError',
        message: 'Ruta no encontrada'
    });
};

module.exports = {
    errorLogger,
    errorHandler,
    notFoundHandler
};