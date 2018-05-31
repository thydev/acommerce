const port = process.env.PORT || 5000;
const baseUrl = '/api/';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const router = express.Router();
const app = express();



// Model Section
require('./config/mongoose');
// End of Model Section

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Testing part
// Return the mocking data for the messages route
const messages = [{
    product: 'some test',
    owner: 'thy'
}, {
    product: 'product2',
    owner: 'toto'
}];
app.get(baseUrl + 'messages', (req, res) => {
    res.json(messages);
});
// End of Testing Section

// App routes
require('./server/config/routes')(app);

app.listen(port, () => console.log(`Listening to port: ${port}`));