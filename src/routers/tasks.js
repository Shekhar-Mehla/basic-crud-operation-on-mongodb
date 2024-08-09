import express from "express";
const taskRouter = express.Router();

// post method
taskRouter.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// // get method
taskRouter.get("/", (req, res) => {
  console.log(req.body);
});

// // update the complete object
// // put method
taskRouter.put("/", (req, res) => {
  console.log(req.body);
});
// // update the partial object
// // patch method
taskRouter.patch("/", (req, res) => {
  console.log(req.body);
});

// // delete method
taskRouter.delete("/", (req, res) => {
  console.log(req.body);
});
export default taskRouter;
