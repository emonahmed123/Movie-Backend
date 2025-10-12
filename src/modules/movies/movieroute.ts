import express from 'express';
import { MovieController } from './moviecontroller';

const router = express.Router();

router.post('/', MovieController.createMovie);
router.get('/:slug', MovieController.getMovieBySlug);
router.get('/', MovieController.getAllMovies);
export const MovieRoute = router;
