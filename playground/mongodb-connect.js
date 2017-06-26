const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    db.collection('Todos').insertOne({
        text: 'Something to do',
        complete: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo.');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: 'Pedro Yen',
        age: 33,
        location: 'Taiwan'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user.');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    db.close();
});