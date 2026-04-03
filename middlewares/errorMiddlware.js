const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internel server error";

    res.status(statusCode).json({
        success: false,
        message: message,
        stack: err.stack || {}
    })
}

export default errorMiddleware;