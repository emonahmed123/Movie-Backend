import mongoose from "mongoose";
import app from "./app";
import config from "./config";
const port = 5000;
async function main() {
  try {
    await mongoose.connect(config.databaseUri as string);

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();
