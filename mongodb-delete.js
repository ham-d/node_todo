//const MongoClient = require("mongodb").MongoClient; (same as below)
const {MongoClient, ObjectID} = require("mongodb"); 

                                        //mongo will create database if it doesnt exist
MongoClient.connect(process.env.DATABASEURL, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    //deleteMany
    // db.collection('todos').deleteMany({'text': 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    
    //deleteOne
    // db.collection('todos').deleteOne({'text': 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // }); 
    
    //findOneAndDelete
    //same as deleteOne but return object so you can see what got deleted
    db.collection('todos').findOneAndDelete({'completed':false}).then((result) => {
        console.log(result);
    });
    
    
    //db.close();
});