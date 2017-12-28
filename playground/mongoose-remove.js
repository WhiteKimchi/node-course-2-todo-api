const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a446b6832c0ea442d79da26';
var userId = '5a38982b7af4c5981aebf0ca';


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '5a448051ea557d622e97ca8f'}).then((todo) => {
    console.log(todo);
});

// Todo.findByIdAndRemove('5a448051ea557d622e97ca8f').then((todo) => {
//     console.log(todo);
// });
