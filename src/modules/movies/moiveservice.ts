import { TMovie } from './movieInterface';
import { Movie } from './moviemodle';

const createMoive = async (payload: TMovie) => {
  const result = await Movie.create(payload);

  return result;
};
const getAllMovies = async () => {
  const result = await Movie.find();
  return result;
};

const getMovieBySlug = async (slug: string) => {
  const result = await Movie.findOne({ slug: slug });
  return result;
};
export const MovieService = {
  createMoive,
  getAllMovies,
  getMovieBySlug,
};
