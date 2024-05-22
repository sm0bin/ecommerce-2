import mongoose from "mongoose";
import app from "./app";
import { Server } from "http";
import config from "./app/config";

const PORT = process.env.PORT;
let server: Server;

async function main() {
  await mongoose.connect(config.database_url as string);

  server = app
    .listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
    .on("error", (error: Error) => {
      console.error(`Error occurred: ${error.message}`);
    });
}

main();
