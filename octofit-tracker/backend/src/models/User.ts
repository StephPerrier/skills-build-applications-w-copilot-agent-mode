import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  weightKg?: number;
  heightCm?: number;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  weightKg: { type: Number },
  heightCm: { type: Number },
  createdAt: { type: Date, default: () => new Date() }
});

export default mongoose.model<IUser>('User', UserSchema);
