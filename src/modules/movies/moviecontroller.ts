import { MovieService } from './moiveservice';

const createMovie = async (req: Request, res: Response) => {
  const result = await MovieService.createMoive(req.body);
  res.json({
    status: 'success',
    message: 'Movie created successfully',
    data: result,
  });
};
export const MovieController = {
  createMovie,
};
