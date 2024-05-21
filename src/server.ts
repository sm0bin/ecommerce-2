import app from "./app";
import { Server } from "http";

const PORT = process.env.PORT;
let server: Server;

async function main() {
  server = app
    .listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
    .on("error", (error: Error) => {
      console.error(`Error occurred: ${error.message}`);
    });
}

main();
