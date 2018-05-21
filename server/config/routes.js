const path = require('path');
const users = require('../controllers/users.js');
const sellers = require('../controllers/sellers.js');

module.exports = (app) => {
    const baseUrl = '/api/';

    app.get(baseUrl + 'users', (req, res) => {
        users.getAll(req, res);
    });

    app.get(baseUrl + 'users/:id', (req, res) => {
        users.getById(req, res);
    });

    app.post(baseUrl + 'users', (req, res) => {
        users.create(req, res);
    });

    app.put(baseUrl + 'users/:id', (req, res) => {
        users.updateById(req, res);
    });

    app.delete(baseUrl + 'users/:id', (req, res)=> {
        users.removeById(req, res);
    });

    // Seller
    app.get(baseUrl + 'sellers', (req, res) => {
        sellers.getAll(req, res);
    });

    app.get(baseUrl + 'sellers/:id', (req, res) => {
        sellers.getById(req, res);
    });

    app.post(baseUrl + 'sellers', (req, res) => {
        sellers.createUser(req, res);
    });

    app.put(baseUrl + 'sellers/:id', (req, res) => {
        sellers.updateUserById(req, res);
    });

    app.delete(baseUrl + 'sellers/:id', (req, res)=> {
        sellers.removeUserById(req, res);
    });

    
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });
}