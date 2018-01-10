const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('ToDoApp').deleteMany({text: 'Eat lunch'}).then((res) => {
  //   console.log(res);
  // });

  // db.collection('ToDoApp').deleteOne({text: '123'}).then((res) => {
  //   console.log(res);
  // });

  db.collection('ToDoApp').findOneAndDelete({completed: false}).then((res) => {
    console.log(res);
  });

  // db.close();
});
