let errorHandler = (app) => {
    //Catch 404 and forward to Error Handler
    app.use(function(req, res, next) {
        let err = new Error("Not Found");
        err.status = 404;
        next(err);
    });

    //Error Handler
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send(err.message);
    });
};

export default errorHandler;