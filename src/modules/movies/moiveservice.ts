import { format } from 'date-fns';
import slugify from 'slugify';
import { TMovie } from './movieInterface';
import { Movie } from './moviemodle';

const createMoive = async (payload: TMovie) => {
  const date = format(payload.releaseDate, 'dd-MM-yyyy');
  console.log(date);

  const slug = slugify(`${payload.title}-${date}`, { lower: true });

  const result = await Movie.create({ ...payload, slug });

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
