/* eslint-disable @typescript-eslint/no-explicit-any */
import { MovieService } from './moiveservice';

const createMovie = async (req: Request, res: Response) => {
  const result = await MovieService.createMoive(req.body);
  res.json({
    status: 'success',
    message: 'Movie created successfully',
    data: result,
  });
};
const getAllMovies = async (req: Request, res: Response) => {
  try {
    const result = await MovieService.getAllMovies();

    res.status(200).json({
      success: true,
      message: 'Movies are fetched successfully !',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Could not fetch movies!',
      error: err,
    });
  }
};

const getMovieBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const result = await MovieService.getMovieBySlug(slug);

    res.status(200).json({
      success: true,
      message: 'Movies are fetched successfully !',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Could not fetch movies!',
      error: err,
    });
  }
};

export const MovieController = {
  createMovie,
  getAllMovies,
  getMovieBySlug,
};
