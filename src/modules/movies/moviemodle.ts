import { Schema } from 'mongoose';
import { TReview } from './movieInterface';

const reviewSchema = new Schema<TReview>({
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});
