const { Schema } = require("mongoose");
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
  }

},

{
  toJSON: {
    getters: true,
  },
}

);


module.exports = bidsSchema;
