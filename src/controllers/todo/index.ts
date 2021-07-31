import { NextFunction, Request, Response } from "express";
import Todo from "../../models/todo";
import {ITodo} from './../../types/todo'
// getTodoById
const getTodoById = (
  req: Request,
  res: Response,
  next: NextFunction,
  id : string
) => {
  try {
    const TodoData = Todo.findById(id);
    req.currentTodo = TodoData;
    next();
  } catch (error) {
    res.status(400).json({ error: "cannot fetch todo" });
  }
};

// createTodo
const createTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const Title: string = await req.body.title;
    const End_date: Date = await req.body.end_date;

    const todo = new Todo({
      title: Title,
      end_date: End_date,
    });

    const newTodo = await todo.save();
    const allTodos = await Todo.find();

    res
      .status(201)
      .json({ message: "Todo added", todo: newTodo, todos: allTodos });
  } catch (error) {
    res.status(400).json({ error: "cannot save todo" });
  }
};

// getTodo -> view one todo

const getTodo = async (req: Request, res: Response): Promise<void> => {
  const todo = await req.currentTodo;
  res.send(todo);
};

// getAllTodos -> view all todos
const getAllTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos = await Todo.find();
    res.status(200).send(todos);
  } catch (error) {
    res.status(400).json({ error: "cannot fetch all todo" });
  }
};

// removeTodo
const removeTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = await req.currentTodo._id;
    const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(id);
    const allTodos : ITodo[] = await Todo.find()
    res.status(200).json({
      message: "Todo deleted",
      todo: deletedTodo,
      todos: allTodos
    })
  } catch (error) {
    res.status(400).json({ error: "cannot delete todo" });

  }
};

// updateTodoStatus -> mark todo as done
const updateTodoStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = await req.currentTodo._id;
    const updateTodo : ITodo | null = await Todo.findByIdAndUpdate(id, { $set: { active_state: true } });
    res.status(200).json({
      message: "Todo updated",
      todo: updateTodo
    })
  } catch (error) {
    res.status(400).json(error + "cannot update todo");
  }
};

// sortTasks -> sort task by date

export {
  createTodo,
  getTodoById,
  getTodo,
  getAllTodos,
  removeTodo,
  updateTodoStatus,
};

// export const functionName = async (req: Request, res: Response) : Promise<void> => {

// }
