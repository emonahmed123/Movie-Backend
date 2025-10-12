import express, { Request, Response } from 'express';
import { Movie } from './moviemodle';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const result = await Movie.create(req.body);
  res.json({
    status: 'success',
    message: 'Movie created successfully',
    data: result,
  });
});

export const MovieRoute = router;
