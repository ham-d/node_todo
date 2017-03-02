//third party lib
var express  = require("express");
var bodyParser = require("body-parser");

//local files
var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {User} = require("./models/users");

//using express
var app = express();

//app.use for middleware
//bodyParser turns JSON into string object to send with request
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    //body will be stored by bodyParser
    var todo = new Todo({
        text: req.body.text
    });
    
    //saves to db
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
    
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

//starting up server
app.listen(process.env.PORT, process.env.IP, () => {
    console.log('server started');
});

module.exports.app = app;