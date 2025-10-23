import { format } from 'date-fns';
import { Schema, model } from 'mongoose';
import slugify from 'slugify';
import { TMovie, TMovieModel, TReview } from './movieInterface';

const reviewSchema = new Schema<TReview>({
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const movieSchema = new Schema<TMovie>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  review: [reviewSchema],
  genre: { type: String, required: true },
  slug: { type: String },
  viewCount: { type: Number, default: 0 },
  isDeleted: { type: Boolean, default: false },
});

// movieSchema.pre('save', function (next) {
//   const date = format(this.releaseDate, 'dd-MM-yyyy');
//   // console.log(date);

//   const slug = slugify(`${this.title}-${date}`, { lower: true });
//   this.slug = slug;
//   next();
// });
// // slove problem

movieSchema.method('createSlug', function createSlug(payload: TMovie): string {
  const date = format(payload.releaseDate, 'dd-MM-yyyy');
  const slug = slugify(`${payload.title}-${date}`, { lower: true });
  return slug;
});

export const Movie = model<TMovie, TMovieModel>('Movie', movieSchema);
