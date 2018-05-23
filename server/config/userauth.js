const express = require('express');
const passport = require('passport');
const app = express.Router();
const env = {
    AUTH0_CLIENT_ID: 'qKlgm4ZUGYtYVEAjyRlnIggFPPy74vSN',
    AUTH0_DOMAIN: 'acommerce.auth0.com',
    AUTH0_CALLBACK_URL: 'http://localhost:3000/callback'
};


module.exports = (app) => {
    /* GET home page. */
    app.get('/', function (req, res, next) {
        res.render('index');
    });

    // Perform the login
    app.get(
        '/login',
        passport.authenticate('auth0', {
            clientID: env.AUTH0_CLIENT_ID,
            domain: env.AUTH0_DOMAIN,
            redirectUri: env.AUTH0_CALLBACK_URL,
            audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
            responseType: 'code',
            scope: 'openid'
        }),
        function (req, res) {
            res.redirect('/');
        }
    );

    // Perform session logout and redirect to homepage
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    // Perform the final stage of authentication and redirect to '/user'
    app.get(
        '/callback',
        passport.authenticate('auth0', {
            failureRedirect: '/'
        }),
        function (req, res) {
            res.redirect(req.session.returnTo || '/user');
        }
    );

}