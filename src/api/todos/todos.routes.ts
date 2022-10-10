import { Router, Request, Response } from 'express';
import Todo from './todos.models';

const router = Router();

router.get('/', (req: Request, res: Response<Todo[]>) => {
  res.json([
    {
      content: 'TODO',
      done: false,
    },
  ]);
});

// router.get<{}, Todo[]>('/', (req, res) => {
//   res.json([{
//     content: 'TODO',
//     done: false,
//   }]);
// });
export default router;
