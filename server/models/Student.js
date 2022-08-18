const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const studentSchema = new Schema(
  {
    studentname: {
     
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    assignment: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Assignment'
      }
    ],
   


  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// set up pre-save middleware to create password
studentSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
studentSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};



const Student = model('Student', studentSchema);

module.exports = Student;
