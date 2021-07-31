import express from 'express';
const router = express.Router()
import {createTodo} from '../controllers/todo/index'

// getTodoById
// createTodo
router.post('/todos',createTodo)
// getTodo -> view one todo
// getAllTodos -> view all todos
// updateTodoStatus -> mark todo as done
// sortTasks -> sort task by date

module.exports = router