import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  console.log("tests");
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
