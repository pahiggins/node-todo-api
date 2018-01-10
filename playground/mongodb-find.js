const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('ToDoApp').find({
  //   _id: new ObjectID('5a55ed9b92bc8143cc81afac')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

  // db.collection('ToDoApp').find().count().then((count) => {
  //   console.log(`Count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to count Todos', err);
  // });

  db.collection('Users').find({
    name: 'Peter'
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Todos', err);
  });

  // db.close();
});
