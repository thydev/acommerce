const port = process.env.PORT || 5000;
const baseUrl = '/api/';
const express = require('express');
const jwt = require('express-jwt');
const cors = require('cors');
const jwks = require('jwks-rsa');
const jwtAuthz = require('express-jwt-authz');

const bodyParser = require('body-parser');

const app = express();


const messages = [{ product: 'some test', owner: 'thy' }, { product: 'product2', owner: 'toto' }];

app.use(cors());

// var jwtCheck = jwt({
//     secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: "https://acommerce.auth0.com/.well-known/jwks.json"
//     }),
//     audience: 'www.wanderlust.com',
//     issuer: "https://acommerce.auth0.com/",
//     algorithms: ['RS256']
// });

// app.use(jwtCheck);

// app.get('/authorized', function (req, res) {
//     res.send('Secured Resource');
// });

// app.listen(port);
// const checkScopes = jwtAuthz(['read:courses']);

// Model Section
require('./server/config/mongoose');
// End of Model Section

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');
app.use(express.static(path.join(__dirname, './client/dist/client')));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get(baseUrl + 'messages', (req, res) => {
    res.json(messages);
});
// End of Testing Section


require('./server/config/routes')(app);

app.listen(port, () => console.log(`Listening to port: ${port}`));