const express = require('express');
const passport = require('passport');
const router = express.Router();
// const User = require('../models/user');
const users = require('../controllers/users');
const mongoose = require('mongoose');
const User = mongoose.model('User');
var path = require("path");

const env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CALLBACK_URL:
    process.env.AUTH0_CALLBACK_URL || 'http://localhost:5000/callback'
};

/* GET home page. */
router.get('/userlogin', function (req, res, next) {
  res.render('index');
});

router.get('/login', passport.authenticate('auth0', {
  clientID: env.AUTH0_CLIENT_ID,
  domain: env.AUTH0_DOMAIN,
  redirectUri: env.AUTH0_CALLBACK_URL,
  responseType: 'code',
  audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
  scope: 'openid profile'
}),
  function (req, res) {
    res.redirect("/");
  });

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/failure'
  }),
  function (req, res) {
    let user = req.user.id;
    console.log("authenticated?????")
    console.log("REQ.USER.ID", req.user.id);
    console.log("REQ.USER.JSON", req.user._json);
    console.log("REQ.USER", req.user);
    if (req.user.id[0] == "g") {
      let gmail = "@gmail.com";
      let e = req.user._json.nickname;
      let email = e.concat(gmail);
      console.log(email);
      var newUser = new User({
        user_id: req.user.id,
        name: req.user._json.name,
        email: email
      });
      console.log(newUser);
    }
    if (req.user.id[0] !== "g") {
      var newUser = new User({
        user_id: req.user.id,
        name: req.user._json.nickname,
        email: req.user._json.name
      });
      console.log(newUser);
    }
    newUser.save(function (err) {
      if (err) {
        console.log("ERROR FROM CREATE USER!!!")
        console.log("USER EMAIL!!!!", newUser.email);
        // User.findOne({email: newUser.email} )
        for (var key in err.errors) {
          req.flash('registration', err.errors[key].message);
        }
      }
      req.session.email = newUser.email;
      console.log(req.session.email);
      console.log("creating users???")
      return res.redirect(req.session.returnTo || '/landing/' + user);
    })
  }
);

// router.post("/users", user, (req, res) => {
//   user.save(function (err) {
//     console.log("saving?")
//     if (err) {
//       console.log("We have an error!", err);
//       for (var key in err.errors) {
//         req.flash('registration', err.errors[key].message);
//       }

//       return res.redirect(req.session.returnTo || '/user');
//     }
//   })
// })

router.get('/failure', function (req, res) {
  var error = req.flash("error");
  var error_description = req.flash("error_description");
  req.logout();
  res.render('failure', {
    error: error[0],
    error_description: error_description[0],
  });
});
router.all("*", (req, res, next) => {
  res.sendFile(path.resolve("./client/dist/index.html"))
})

module.exports = router;
