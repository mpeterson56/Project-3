const { Schema, model } = require("mongoose");

const dateFormat = require("../utils/dateFormat");
const commentSchema = require("../models/Comment");
const bidsSchema = require("../models/Bids");

const assignmentSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    askPrice: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    subject: {
      type: String,
      required: true,
    },

    bids: [bidsSchema],
    comments: [commentSchema],
  },

  {
    toJSON: {
      getters: true,
    },
  }
);

const Assignment = model("Assignment", assignmentSchema);
module.exports = Assignment;
