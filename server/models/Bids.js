const { Schema, model } = require("mongoose");

const dateFormat = require("../utils/dateFormat");

const bidsSchema = new Schema({
  priceOffer: {
    type: String,
    required: "you need to add a bid amount",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  tutorname: {
    type: String,
    required: true,
  },
  assignment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Assignment",
    },
  ],
},
{
  toJSON: {
    getters: true,
  },
});

const Bids = model("Bids", bidsSchema);

module.exports = Bids;
