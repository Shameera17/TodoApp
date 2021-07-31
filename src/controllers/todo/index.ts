import { Request, Response } from "express";
import Todo from "../../models/todo";

// getTodoById


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
// getAllTodos -> view all todos
// updateTodoStatus -> mark todo as done
// sortTasks -> sort task by date

export { createTodo };
