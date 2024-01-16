// src/controllers/todoController.js
const Todo = require('../model/todo');

exports.createTodo = async (req, res) => {
  try {
    const { task } = req.body;
    const todo = new Todo({ task });
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Implement other CRUD operations 
