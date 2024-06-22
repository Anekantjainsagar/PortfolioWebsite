import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  query: String,
  date: {
    type: Date,
    default: new Date(),
  },
});

const Query = mongoose.models.query || mongoose.model("query", querySchema);

export default Query;
