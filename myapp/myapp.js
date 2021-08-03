const express = require('express');

const app = express();

app.get('/kata', (req, res, next) => {
    console.log('ABC');
});

app.listen(3000);
