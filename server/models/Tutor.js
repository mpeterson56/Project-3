const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const bidsSchema = require("../models/Bids");

const tutorSchema = new Schema(
  {
    tutorname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/,
        "Must match an email address format!",
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    bids: [bidsSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// set up pre-save middleware to create password
tutorSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
tutorSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Tutor = model("tutor", tutorSchema);

module.exports = Tutor;
