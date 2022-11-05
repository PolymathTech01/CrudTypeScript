import { Request, Response, NextFunction } from 'express';
import { Todos, TodoWithId } from './todos.models';
export const findAll = async (
  req: Request,
  res: Response<TodoWithId[]>,
  // eslint-disable-next-line @typescript-eslint/comma-dangle
  next: NextFunction
) => {
  try {
    const result = Todos.find();
    const todos = await result.toArray();
    res.json(todos);
  } catch (error) {
    next(error);
  }
};
