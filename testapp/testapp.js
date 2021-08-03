const express = require('express');

const app = express();

// ez egy middleware, mert kezeli a req, res objektumokat és
// tartalmazza  a next fv. hívást, ami gyakorlatilag egy return parancsnak felel meg.
const timeLogger = (req, res, next) => {
    console.log(Date.now());
    next();
};

const firstMW = (req, res, next) => {
    console.log('First middleware');
    next();
};

const secondMW = (req, res, next) => {
    console.log('Second middleware');
    next();
};

// app.use(timeLogger);

app.use(timeLogger, firstMW, secondMW)

app.get('/test', (req, res, next) => {
    res.send('hello');
    console.log('ABC');
});

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});
