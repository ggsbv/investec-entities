"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorHandler = function (app) {
    //Catch 404 and forward to Error Handler
    app.use(function (req, res, next) {
        var err = new Error("Not Found");
        err.status = 404;
        next(err);
    });
    //Error Handler
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send(err.message);
    });
};
exports.default = errorHandler;
