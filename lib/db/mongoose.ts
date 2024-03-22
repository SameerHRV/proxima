import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseConnection {
  connect: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

const cache: MongooseConnection = (global as any).mongoose;

if (!cache) {
  (global as any).mongoose = {
    connect: null,
    promise: null,
  };
}

export const connectToDB = async () => {
  if (cache.connect) return cache.connect;

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
  }

  cache.promise =
    cache.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "plusai",
      bufferCommands: false,
    });

  cache.connect = await cache.promise;

  return cache.connect;
};
