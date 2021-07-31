import express from 'express';
const router = express.Router()
import {getTodoById, createTodo,getTodo} from '../controllers/todo/index'

// getTodoById
router.param('todoId',getTodoById)

// createTodo
router.post('/todos',createTodo)

// getTodo -> view one todo
router.get('/todos/:todoId',getTodo)

// getAllTodos -> view all todos
// updateTodoStatus -> mark todo as done
// sortTasks -> sort task by date

module.exports = router