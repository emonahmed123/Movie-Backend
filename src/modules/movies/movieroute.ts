import express from 'express';
import { MovieController } from './moviecontroller';

const router = express.Router();

router.post('/', MovieController.createMovie);

export const MovieRoute = router;
