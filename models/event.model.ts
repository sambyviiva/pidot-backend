import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  participants: [String],
  declined: {
    type: [String],
  },
  maybe: {
    type: [String],
  },
});

export const Event = mongoose.model("Event", eventSchema);
