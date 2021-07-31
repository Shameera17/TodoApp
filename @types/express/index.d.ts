import TodoModel from '../../src/models/todo';

declare global{
    namespace Express {
        interface Request {
            currentTodo : TodoModel,
        }
    }
}