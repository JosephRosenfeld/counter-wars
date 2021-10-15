import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Counter from "./models/CounterModel.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    console.log("hit meep");
    const counter = await Counter.findOne();
    if (!counter) {
      console.log("no counter");
      const firstCounter = new Counter({
        count: 0,
      });
      await firstCounter.save();
      res.status(201).json(firstCounter);
    }
    res.status(200).json(counter);
  } catch (err) {
    console.log("test");
    console.log(err);
  }
});

//change count
app.post("/", async (req, res) => {
  console.log(req.body.change);
});

const PORT = process.env.PORT || 5000;
const CONNECTION_URL =
  "mongodb+srv://dbAdmin:Password123!@counterdb.atygd.mongodb.net/test";

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
