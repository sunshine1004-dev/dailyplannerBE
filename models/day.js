const mongoose = require("mongoose");
const { Schema } = mongoose;

const daySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  awake: Date,
  gratefulFor: String,
  createdAt: Date,
});

module.exports = mongoose.model("Day", daySchema);
