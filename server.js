import express from "express";
// importing the task router from the task.js
import taskRouter from "./src/routers/tasks.js";
// import the config.js to connect server with db
import { connection } from "./src/config/config.js";
const server = express();
const PORT = 8000;
// middlewares
connection();
// this middleware to parse coming request into the json format
server.use(express.json());

// creating the end point for the task resource
server.use("/api/v1/task", taskRouter);

server.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is runnig at http://localhost:${PORT}`);
});
