import mongoose from 'mongoose';

export const MONGODB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit-tracker';

/**
 * Connect to MongoDB using mongoose.
 * Throws an error if the connection fails.
 */
export async function connectToDatabase(): Promise<typeof mongoose> {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB:', MONGODB_URI);
    return mongoose;
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err;
  }
}

export async function disconnectDatabase(): Promise<void> {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (err) {
    console.warn('Error disconnecting from MongoDB', err);
  }
}
