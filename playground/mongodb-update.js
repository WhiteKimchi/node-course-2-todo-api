//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');


    // findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5a3888f97c9361bd1c631d54")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5a388e8f7c9361bd1c631e4d")
    }, {
        $set: {
            name: 'Sean'
        },
        $inc: {
            age: 1 
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    


    //db.close();
});

