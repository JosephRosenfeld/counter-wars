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
    //next line always gets the oldest doc in the db
    const counter = await Counter.findOne().sort({ _id: 1 });
    console.log(!counter);
    if (!counter) {
      console.log("no counter");
      const firstCounter = new Counter({
        count: 0,
      });
      await firstCounter.save();
      res.status(200).json(firstCounter);
    }
    res.status(200).json(counter);
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
});

//change count
app.post("/", async (req, res) => {
  console.log(req.body.change);
  const change = req.body.change;
  try {
    console.log("hit post");
    const counter = await Counter.findOne().sort({ _id: 1 });
    const updatedCounter = await Counter.findByIdAndUpdate(
      counter._id,
      { count: counter.count + change },
      { new: true }
    );
    res.status(200).json(updatedCounter);
  } catch (err) {
    res.status(404).json(counter);
  }
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
