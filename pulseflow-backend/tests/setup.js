import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongo;

export const connect = async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();

  await mongoose.connect(uri);
};

export const close = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongo.stop();
};

export const clear = async () => {
  const collections = mongoose.connection.collections;

  for (let key in collections) {
    await collections[key].deleteMany();
  }
};