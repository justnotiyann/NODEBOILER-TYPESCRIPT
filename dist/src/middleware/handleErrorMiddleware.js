"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function notFoundMiddleware(error, req, res, next) {
    res.status(400).json({
        data: error,
    });
}
exports.default = notFoundMiddleware;
