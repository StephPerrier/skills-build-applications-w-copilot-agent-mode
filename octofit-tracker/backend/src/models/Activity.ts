import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IActivity extends Document {
  user: Types.ObjectId;
  date: Date;
  type: string;
  durationMinutes: number;
  calories: number;
}

const ActivitySchema = new Schema<IActivity>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  calories: { type: Number, required: true }
});

export default mongoose.model<IActivity>('Activity', ActivitySchema);
