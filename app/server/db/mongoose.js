var mongoose = require("mongoose");

//enables promises on mongoose
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASEURL || "mongodb://localhost/todolist");

module.exports = {
    mongoose: mongoose
};