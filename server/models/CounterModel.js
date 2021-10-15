import mongoose from "mongoose";

const counterSchema = mongoose.Schema({
  title: String,
  count: Number,
});

const Counter = mongoose.model("Counter", counterSchema);

export default Counter;
