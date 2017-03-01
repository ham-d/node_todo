var mongoose = require("mongoose");

//enables promises on mongoose
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASEURL);

module.exports = {
    mongoose: mongoose
};