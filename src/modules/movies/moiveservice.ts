import { TMovie } from './movieInterface';
import { Movie } from './moviemodle';

const createMoive = async (payload: TMovie) => {
  const result = await Movie.create(payload);
  return result;
};

export const MovieService = {
  createMoive,
};
