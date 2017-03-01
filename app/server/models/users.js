var mongoose = require("mongoose");

var User = mongoose.model("Users", {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim:true,
    }
});


//example

// var user = new User({
//     email: " dan@example.com "
// });


//saves to db

// user.save().then((doc) => {
//     console.log('User saved', doc);
// }, (e) => {
//     console.log('Unable to save user', e);
// })

module.exports.User = User;