import mongoose from "mongoose";

export const connection = async () => {
  try {
    const dbConnection = mongoose.connect(
      "mongodb://localhost:27017/shekhar_ntdl"
    );
    dbConnection && console.log("dbconnect");
  } catch (error) {
    console.log(error);
  }
};
