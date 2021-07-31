import express from "express";
const router = express.Router();
import {
  getTodoById,
  createTodo,
  getTodo,
  getAllTodos,
  removeTodo,
  updateTodoStatus,
} from "../controllers/todo/index";

// getTodoById
router.param("todoId", getTodoById);

// createTodo
router.post("/todos", createTodo);

// getTodo -> view one todo
router.get("/todos/:todoId", getTodo);

// getAllTodos -> view all todos
router.get("/todos", getAllTodos);

// removeTodo
router.delete("/todos/:todoId", removeTodo);

// updateTodoStatus -> mark todo as done
router.put("/todos/:todoId", updateTodoStatus);

// sortTasks -> sort task by date

module.exports = router;
