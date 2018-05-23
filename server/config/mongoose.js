
const mongoose = require('mongoose'),
        fs = require('fs'),
        path = require('path');

module.exports = (() => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/ecommerce');
    // create a variable that points to the models folder
    const models_path = path.join(__dirname, './../models');
    // read all of the files in the models_path and require (run) each of the javascript files
    fs.readdirSync(models_path).forEach((file) => {
        if(file.indexOf('.js') >= 0) {
            // require the file (this runs the model file which registers the schema)
            require(models_path + '/' + file);
        }
    });
})();