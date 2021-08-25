const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log')),
}));

app.listen(process.env.PORT);