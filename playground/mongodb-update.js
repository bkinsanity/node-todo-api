const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    // findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5948c664e195d9496c002957")
        }, {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        }).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("594773e5fe732a0f986a2010")
        }, {
            $set: {
                name: "Pedro"
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
        console.log(result);
    });

    db.close();
});