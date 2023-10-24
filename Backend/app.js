const express = require("express");
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xssClean = require('xss-clean');
const hpp = require('hpp');

const userRouter = require("./routes/userRoutes");

const app = express();

// 1) GLOBAL MIDDLEWARES

//set security HTTP headers
app.use(helmet()); 

//development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//limit requests from same API
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000, //1hr
    message: 'Too many requests from this IP, please try again in an hour!'
})
app.use('/api', limiter);

//Body parser, reading data from body into req.body
app.use(express.json({
    limit: '10kb'
}));

//Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// 3) ROUTES
app.use("/api/v1/users", userRouter);

//test api start

//test api ends


module.exports = app;
