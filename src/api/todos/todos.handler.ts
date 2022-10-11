import { Request, Response } from 'express';
import { Todos, TodoWithId } from './todos.models';
export const findAll = async (req: Request, res: Response<TodoWithId[]>) => {
  const result = Todos.find();
  const todos = await result.toArray();
  res.json(todos);
};
