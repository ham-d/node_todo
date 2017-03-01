//const MongoClient = require("mongodb").MongoClient; (same as below)
const {MongoClient, ObjectID} = require("mongodb"); 

                                        //mongo will create database if it doesnt exist
MongoClient.connect('mongodb://localhost/todoapp', (err, db) => {
    if (err) {
        //if return hits the code is done.
        //alternative would be to use else clause for success case
        return console.log('unable to connect to MongoDb server');
    } 
    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // },(err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
        
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    
    db.collection('Users').insertOne({
        name: 'Dan',
        age: 24,
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }
        
        console.log(result.ops);
    });
    
    db.close();
});