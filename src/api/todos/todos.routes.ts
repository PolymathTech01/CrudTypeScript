import { Router } from 'express';
import * as TodoHandlers from './todos.handler';
const router = Router();

router.get('/', TodoHandlers.findAll);

// router.get<{}, Todo[]>('/', (req, res) => {
//   res.json([{
//     content: 'TODO',
//     done: false,
//   }]);
// });
export default router;
