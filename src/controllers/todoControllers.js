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

exports.getTodoById= async(req,res)=>{
    try {
      const todo=await Todo.findById(req.params.id);
      if(!todo){
        return res.status(404).json({error:"Todo not found"});
      }
      res.json(todo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.getTodos= async(req,res)=>{
  try {
    const todo=await Todo.find();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Implement other CRUD operations 
