const express = require('express');

const app = express();

app.get('/test', (req, res, next) => {
    res.send('hello')
    console.log('ABC');
});

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});
