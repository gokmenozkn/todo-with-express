const Todo = require('./../models/Todo');

exports.get = (req, res, next) => {  
  let todo = Todo.find()
    .then(docs => {
      res.render('main', { docs });
    })
    .catch(e => console.log(e));
};

exports.post = (req, res, next) => {  
  let todos = new Todo({
    work: req.body.work
  });
  todos.save()
    .then(() => {
      res.redirect('/');
      console.log("Successfully added your work :) ")
    })
    .catch(e => console.log(e));
};

exports.delete = (req, res, next) => {
  let itemId = req.params.id;
  Todo.findByIdAndDelete(itemId)
    .then(docs => {
      console.log("Item deleted!", docs);
      res.redirect('/')
    })
    .catch(e => console.log("Error: ", e));
}