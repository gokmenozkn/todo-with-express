const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  work: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;