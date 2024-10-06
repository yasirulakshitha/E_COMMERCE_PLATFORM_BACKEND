import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionString =
      "mongodb+srv://dev:S5PgAGzwrF8DF6Gn@cluster0.hv5xz.mongodb.net/dev";
    await mongoose.connect(connectionString);
    console.log("Connected to the database");
  } catch (error) {
    console.log(error);
    console.log("Error connecting to the database");
  }
};
