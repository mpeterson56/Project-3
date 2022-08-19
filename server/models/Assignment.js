const { Schema, model } = require("mongoose");
//const bidsSchema = require('./Bids');
const dateFormat = require("../utils/dateFormat");
const commentSchema = require("../models/Comment");

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

    username: {
      type: String,
      required: true,
    },

    bids: [{ type: Schema.Types.ObjectId, ref: "Bids" }],
    subject: {
      type: String,
      required: true,
    },
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
