const path = require('path');
const users = require('../controllers/users');
const sellers = require('../controllers/sellers');
const products = require('../controllers/products');
const orders = require('../controllers/orders');

const passport = require('passport');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();

module.exports = (app) => {
    const baseUrl = '/api/';
    // User Routes
    app.get(baseUrl + 'users', (req, res) => { users.getAll(req, res); });
    // app.get(baseUrl + 'users/:id', (req, res) => { users.getById(req, res); });
    app.get(baseUrl + 'user/:email', (req, res) => { users.getByEmail(req, res); });

    app.post(baseUrl + 'users', (req, res) => { users.create(req, res); });
    app.put(baseUrl + 'users/:id', (req, res) => { users.updateById(req, res); });
    app.delete(baseUrl + 'users/:id', (req, res) => { users.removeById(req, res); });
    // Create cart products
    app.post(baseUrl + 'users/cart/:id', (req, res) => { users.createCart(req, res); });

    // Seller Routes
    app.get(baseUrl + 'sellers', (req, res) => { sellers.getAll(req, res); });
    app.get(baseUrl + 'sellers/:id', (req, res) => { sellers.getById(req, res); });
    app.post(baseUrl + 'sellers', (req, res) => { sellers.create(req, res); });
    app.put(baseUrl + 'sellers/:id', (req, res) => { sellers.updateById(req, res); });
    app.delete(baseUrl + 'sellers/:id', (req, res) => { sellers.removeById(req, res); });

    // Product Routes
    app.get(baseUrl + 'products', (req, res) => { products.getAll(req, res); });
    app.get(baseUrl + 'products/:id', (req, res) => { products.getById(req, res); });
    // Need a permission to create a product
    // Use the params sellerid for testing now
    app.post(baseUrl + ':sellerid/products', (req, res) => {
        products.create(req, res);
    });
    // Auth must be detected
    app.put(baseUrl + ':sellerid/products/:id', (req, res) => {
        products.updateById(req, res);
    });
    // Auth must be detected
    app.delete(baseUrl + ':sellerid/products/:id', (req, res) => {
        products.removeById(req, res);
    });
    // Create a review
    app.post(baseUrl + 'products/reviews/:id', (req, res) => {
        console.log(req);
        products.createReview(req, res);
    });

    // Order Routes
    app.get(baseUrl + 'orders', ensureLoggedIn, (req, res) => { orders.getAll(req, res); });
    app.get(baseUrl + 'orders/:id', (req, res) => { orders.getById(req, res); });
    app.post(baseUrl + 'orders', (req, res) => { orders.create(req, res); });
    app.put(baseUrl + 'orders/:id', (req, res) => { orders.updateById(req, res); });
    app.delete(baseUrl + 'orders/:id', (req, res) => { orders.removeById(req, res); });

    //Payment Route
    app.post(baseUrl + 'orders/payment', (req, res) => { orders.createPayment(req, res); });

    // Go to client route when the above routes didnot match
    // app.all("*", (req,res,next) => {
    //     res.sendFile(path.resolve('./client/dist/index.html'));
    // });
}