const port = 5000;
const baseUrl = '/api/';
const express = require('express');
const app = express();

// Model Section
require('./server/config/mongoose');
// End of Model Section

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const path = require('path');
app.use(express.static(path.join(__dirname, './client/dist/client')));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Testing Section
const messages = [{product: 'some test', owner: 'thy'}, {product: 'product2', owner: 'toto'}];
app.get(baseUrl + 'messages', (req, res) => {
    res.json(messages);
});
// End of Testing Section

require('./server/config/routes')(app);

app.listen(port, () => console.log(`Listening to port: ${port}`));