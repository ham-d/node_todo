//const MongoClient = require("mongodb").MongoClient; (same as below)
const {MongoClient, ObjectID} = require("mongodb"); 

                                        //mongo will create database if it doesnt exist
MongoClient.connect(process.env.DATABASEURL, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    //findOneAndUpdate(filter, update, options, callback)
    db.collection('todos').findOneAndUpdate({
        //filter
        "_id": new ObjectID('58b72a25f36d281facb7abf0')
    }, {
        //update(there is a complete list of update operators in the mongodb docs)
        $set: {
            "completed": true
        }
    }, {
        //options
        returnOriginal: false
        //promise(callback)
    }).then((result) => {
        console.log(result);
    });
    
    //choose carefully when to call db.close because too early might cause conflicts
    //db.close();
});
