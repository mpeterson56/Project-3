const { Schema, model } = require('mongoose');

const dateFormat = require('../utils/dateFormat');


const bidsSchema = new Schema(
{
priceOffer: {
    type: String,
    required: 'you need to add a bid amount',
    minlength: 3,
    maxlength: 10
},
createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
  tutorname: {
    type: String,
    required: true
  },
assignment: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Assignment'
    }
  ],
  
    toJSON: {
      virtuals: true
    }
}
);

const Bids = model('Bids', bidsSchema);

module.exports = Bids;