const { AppError } = require('../utils/errorTypes');


const errorLogger = (err, req, res, next) => {
    console.error('\nError Stack:', err.stack);
    console.error('Error Message:', err.message);
    console.error('Error Name:', err.name);
    next(err);
};


const errorHandler = (err, req, res, next) => {
    
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

    
    if (err.name === 'CastError') {
        return res.status(400).json({
            status: 'error',
            type: 'CastError',
            message: 'ID inválido',
            details: err.message
        });
    }

  
    if (err instanceof AppError) {
        return res.status(err.status).json({
            status: 'error',
            type: err.name,
            message: err.message
        });
    }

   
    if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({
            status: 'error',
            type: 'AuthenticationError',
            message: 'Token inválido'
        });
    }

   
    if (err.name === 'TokenExpiredError') {
        return res.status(401).json({
            status: 'error',
            type: 'AuthenticationError',
            message: 'Token expirado'
        });
    }

  
    return res.status(500).json({
        status: 'error',
        type: 'InternalServerError',
        message: 'Error interno del servidor'
    });
};


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