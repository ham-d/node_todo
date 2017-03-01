var mongoose = require("mongoose");

var Todo = mongoose.model('todos', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        //takes off leading and trailing empty spaces
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

//example

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// //saves to db
// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo');
// });

// var otherTodo = new Todo({
//     text: 'Feed the dog',
//     completed: true,
//     completedAt: 123
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save', e);
// })

module.exports.Todo = Todo;