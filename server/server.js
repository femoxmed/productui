const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.use(express.static(publicPath));

app.get('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    res.sendFile(path.join(publicPath, 'index.html'));
    next();
});

app.listen(port, () => {
    console.log('Server is up!');
});