import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

const connection = {
  isConnected: 0,
};

const dbConnect = async () => {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(uri, options);
  connection.isConnected = db.connections[0].readyState;
};

export default dbConnect;
