import express from "express";
const taskRouter = express.Router();
import mongoose from "mongoose";
// creating table(collection) task

const taskSchema = new mongoose.Schema({}, { strict: false });
const tasksCollection = mongoose.model("task", taskSchema);

// post method
taskRouter.post("/", (req, res) => {
  // creating and adding the record or object into the table
  const result = tasksCollection(req.body).save();
  console.log("updated");
});

// // get method
taskRouter.get("/", async (req, res) => {
  const result = await tasksCollection.find();
  res.send(result);
});

// // update the complete object
// // put method
taskRouter.put("/", async (req, res) => {
  const { _id, ...rest } = req.body;
  const result = await tasksCollection.findByIdAndUpdate({ _id }, { rest });
});
// // update the partial object
// // patch method
taskRouter.patch("/", async (req, res) => {
  const { _id, ...rest } = req.body;
  const result = await tasksCollection.findOneAndUpdate({ _id }, { rest });
});

// // delete method
taskRouter.delete("/", (req, res) => {
  console.log(req.body);
});
export default taskRouter;
