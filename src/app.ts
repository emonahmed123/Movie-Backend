import cors from 'cors';
import express from 'express';
import { MovieRoute } from './modules/movies/movieroute';
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/movie', MovieRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
export default app;
