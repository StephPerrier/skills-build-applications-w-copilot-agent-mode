import mongoose from 'mongoose';
import User from '../models/User';
import Activity from '../models/Activity';

const MONGODB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit-tracker';

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB:', MONGODB_URI);

    // Clear existing data (idempotent)
    await Activity.deleteMany({});
    await User.deleteMany({});

    // Create sample users
    const users = await User.insertMany([
      {
        name: 'Alice Example',
        email: 'alice@example.com',
        weightKg: 68,
        heightCm: 165
      },
      {
        name: 'Bob Example',
        email: 'bob@example.com',
        weightKg: 82,
        heightCm: 180
      }
    ]);

    console.log(`Inserted ${users.length} users`);

    // Create sample activities
    const activities = await Activity.insertMany([
      {
        user: users[0]._id,
        date: new Date(),
        type: 'running',
        durationMinutes: 30,
        calories: 320
      },
      {
        user: users[0]._id,
        date: new Date(Date.now() - 24 * 60 * 60 * 1000),
        type: 'yoga',
        durationMinutes: 45,
        calories: 180
      },
      {
        user: users[1]._id,
        date: new Date(),
        type: 'cycling',
        durationMinutes: 60,
        calories: 600
      }
    ]);

    console.log(`Inserted ${activities.length} activities`);

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    try {
      await mongoose.disconnect();
    } catch (e) {
      // ignore
    }
    process.exit(1);
  }
}

seed();
