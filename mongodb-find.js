//const MongoClient = require("mongodb").MongoClient; (same as below)
const {MongoClient, ObjectID} = require("mongodb"); 

                                        //mongo will create database if it doesnt exist
MongoClient.connect(process.env.DATABASEURL, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    
    //choose carefully when to call db.close because too early might cause conflicts
    //db.close();
});

console.log(process.env.DATABASEURL); 