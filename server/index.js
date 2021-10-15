import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Counter from "./models/CounterModel.js";

const app = express();

app.use(cors());
app.use(express.json());

//return object count
app.get("/", async (req, res) => {
  try {
    console.log("got");
    const count = await Counter.findOne();
    if (!counts) {
      const firstCount = new Counter({
        count: 0,
      });
      firstCount.save();
      res.status(200).json({ count: 0 });
    } else {
      res.status(200).json(count);
    }
  } catch (error) {
    res.status(404).json({ message: error.messages });
  }
});

//change count
app.post("/", (req, res) => {
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
